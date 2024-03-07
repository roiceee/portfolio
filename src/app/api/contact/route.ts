import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const data: FormType = await request.json();

  const isSent = await sendEmail(
    "From: " + data.email + " | " + data.fullname,
    data.message
  );
  if (!isSent) {
    return NextResponse.json({ status: 400 });
  }
  return NextResponse.json({ status: 200 });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (subject: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: "jroicealdeza@gmail.com",
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return true;
  } catch (error) {
    return false;
  }
};
