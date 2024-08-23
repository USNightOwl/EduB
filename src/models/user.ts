import bcrypt from "bcrypt";
import { Resend } from "resend";
import prisma from "@/lib/prismadb";
import { generateOTP } from "@/utils/helper";

export const UserNotFound = new Error("User does not exist");
export const InvalidCredentials = new Error("Invalid Credentials");
export const PhoneAlreadyExists = new Error("Phone number already exists");
export const Unauthorized = new Error("Unauthorized");

export async function createUser(name: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      image: `https://avatar.iran.liara.run/username?username=${name}`,
      emailVerifiedByUser: false,
    },
  });

  return user;
}

export async function sendOTPverifyEmail(email: string) {
  const token = generateOTP();

  const user = await prisma.user.findUnique({
    where: { email },
    select: { emailVerifiedByUser: true },
  });
  if (!user) return { message: "Email not found", status: 400 };
  if (user.emailVerifiedByUser) return { message: "Email verified", status: 200 };
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
    return { message: "success", status: 200 };
  } catch (error) {
    return { message: "Opps! Send email error", status: 400 };
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

export async function checkOTPtoVerifyEmail(email: string, OTP: string) {
  const user = await prisma.user.findUnique({
    select: { OTP: true, emailVerifiedByUser: true },
    where: { email },
  });
  if (!user) return { message: "Email not exists", status: 400 };
  if (user.emailVerifiedByUser) return { message: "Email verified", status: 200 };
  if (OTP === "login") return { message: "Email chưa được xác thực", status: 400, code: "123" };
  if (user.OTP != OTP) return { message: "OTP doesn't match", status: 400 };
  // update verification status
  await verificationEmail(email);
  return { message: "Account has been verified", status: 200 };
}

export async function auth(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user?.password) {
    throw new Error("Invalid Credentials");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Invalid Credentials");
  }

  return user;
}

export async function updateName(email: string, name: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) throw new Error("Invalid Credentials");
  const updateName = await prisma.user.update({
    where: { email },
    data: { name },
  });

  return updateName;
}

export async function changePassword(email: string, currentPassword: string, newPassword: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw UserNotFound;
  }

  let match = true;
  if (user.password) {
    match = await bcrypt.compare(currentPassword, user.password);
  }

  if (!match) {
    throw InvalidCredentials;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const res = await prisma.user.update({
    where: {
      email,
    },
    data: {
      password: hashedPassword,
    },
  });

  return res;
}
