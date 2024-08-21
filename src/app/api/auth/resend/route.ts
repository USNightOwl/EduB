import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/helper";
import { sendOTPverifyEmail } from "@/models/user";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ message: "Missing email" }, { status: 400 });
    }
    const sendOTP = await sendOTPverifyEmail(email as string);
    if (sendOTP.status === 400) return NextResponse.json({ message: sendOTP.message }, { status: 400 });
    return NextResponse.json(
      { message: sendOTP.message === "Email verified" ? "Email verified" : "OTP resend success, check your email" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
