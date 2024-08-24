import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({ email, text }: { email: string; text: string }) {
  try {
    const isVerified = await transporter.verify();
    if (!isVerified) throw new Error("SendMail failed");
  } catch (error) {
    console.error("Something Went Wrong", SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    throw new Error("SendMail failed");
  }
  const mailOptions = {
    from: "edub-admin@gmail.com",
    to: email,
    subject: "OTP verify account EduB",
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Sent mail:", console.log("Email sent: " + info.response));
    if (info.rejected) throw new Error("Send mail failed");
  } catch (error) {
    throw new Error("Send mail failed");
  }
}
