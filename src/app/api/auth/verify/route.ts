import { NextResponse } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getErrorMessage } from "@/utils/helper";
import { checkOTPtoVerifyEmail } from "@/models/user";

export async function POST(request: Request) {
  try {
    const { email, OTP } = await request.json();
    if (!email || !OTP) {
      return NextResponse.json({ message: "Missing email or OTP code" }, { status: 400 });
    }
    const res = await checkOTPtoVerifyEmail(email as string, OTP as string);
    return NextResponse.json({ message: res.message }, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
