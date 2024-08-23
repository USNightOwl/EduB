import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "../../[...nextauth]/options";
import { getErrorMessage } from "@/utils/helper";
import { changePassword, InvalidCredentials, UserNotFound } from "@/models/user";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const { password, newPassword } = await request.json();
    if (!password || !newPassword) {
      return NextResponse.json({ message: "Missing current password or new password" }, { status: 400 });
    }

    // update password
    const user = await changePassword(session.user.email!, password as string, newPassword as string);

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
        return NextResponse.json({ message: "Invalid email" }, { status: 400 });
      }
    }

    if (error === UserNotFound) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    if (error === InvalidCredentials) {
      return NextResponse.json({ message: "Incorrect current password" }, { status: 400 });
    }

    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
