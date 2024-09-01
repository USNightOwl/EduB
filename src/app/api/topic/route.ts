import { NextResponse } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { getErrorMessage } from "@/utils/helper";
import { newTopic, listTopics } from "@/models/category";

export async function GET() {
  try {
    const topics = await listTopics();
    return NextResponse.json({ message: "success", data: topics });
  } catch (error) {
    console.log("Error getting all categories", getErrorMessage(error));

    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user && session?.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const { topic, categoryId } = await request.json();

    if (!topic || !categoryId) {
      return NextResponse.json({ message: "Missing topic or category" }, { status: 400 });
    }

    const nTopic = await newTopic((topic as string).toLowerCase(), categoryId as string);
    return NextResponse.json({ message: "success", data: nTopic });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: `Invalid JSON: ${getErrorMessage(error)}` }, { status: 400 });
    }

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({ message: "Topic already exists" }, { status: 400 });
      }
    }

    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
