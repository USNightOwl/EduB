import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "../../[...nextauth]/options";
import { getErrorMessage } from "@/utils/helper";
import { getBio, updateBio } from "@/models/user";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const { bio } = await request.json();
    if (!bio) {
      return NextResponse.json({ message: "Missing biography" }, { status: 400 });
    }

    const user = await updateBio(session.user.email!, bio as string);

    return NextResponse.json({
      message: "success",
      data: user,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: `Invalid JSON: ${getErrorMessage(error)}` }, { status: 400 });
    }

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2023") {
        return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
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

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const bio = await getBio(session.user.email!);
    if (!bio) {
      return NextResponse.json({ message: "Bio not found" }, { status: 400 });
    }
    return NextResponse.json({ message: "success", data: bio });
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
