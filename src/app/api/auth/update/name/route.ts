import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "../../[...nextauth]/options";
import { getErrorMessage } from "@/utils/helper";
import { updateName } from "@/models/user";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ message: "Missing name" }, { status: 400 });
    }

    const user = await updateName(session.user.email!, name as string);

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
