import bcrypt from "bcrypt";
import { Resend } from "resend";
import prisma from "@/lib/prismadb";
import { generateOTP } from "@/utils/helper";

export async function createUser(name: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedEmail = await bcrypt.hash(email, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      image: `https://robohash.org/${hashedEmail}.png?set=set4`,
      emailVerifiedByUser: false,
    },
  });

  return user;
}

export async function sendOTPverifyEmail(email: string) {
  const token = generateOTP();

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return;
  await prisma.user.update({
    where: { email },
    data: { OTP: token },
  });
  // send OTP to email
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { error } = await resend.emails.send({
      from: "EduB <onboarding@resend.dev>",
      to: [email],
      subject: "OTP verify account EduB",
      html: `<h1>Your token: ${token}</h1>`,
    });
    if (error) throw new Error(error.message);
    return true;
  } catch (error) {
    return false;
  }
}

export async function verificationEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return;
  const updateEmail = await prisma.user.update({
    where: { email },
    data: { emailVerifiedByUser: true },
  });

  return updateEmail;
}
