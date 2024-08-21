import { NextResponse } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getErrorMessage } from "@/utils/helper";
import { createUser, sendOTPverifyEmail } from "@/models/user";

export async function POST(request: Request) {
  try {
    const { name, email, password, rePassword } = await request.json();

    if (!name || !email || !password || !rePassword) {
      return NextResponse.json({ message: "Missing name, email or password" }, { status: 400 });
    }

    if (password != rePassword) {
      return NextResponse.json({ message: "Confirm password do not match" }, { status: 400 });
    }

    const user = await createUser(name as string, email as string, password as string);
    const sendOTP = await sendOTPverifyEmail(email as string);
    if (sendOTP.status === 400) return NextResponse.json({ message: sendOTP.message }, { status: 400 });

    return NextResponse.json({ message: "success", data: user });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: `Invalid JSON: ${getErrorMessage(error)}` }, { status: 400 });
    }

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({ message: "Email already exists" }, { status: 400 });
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
