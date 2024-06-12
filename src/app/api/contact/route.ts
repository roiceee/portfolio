import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormType {
  email: string;
  fullname: string;
  message: string;
}

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = (data: any): data is FormType => {
  return (
    typeof data.email === "string" &&
    validateEmail(data.email) &&
    typeof data.fullname === "string" &&
    data.fullname.trim().length > 0 &&
    typeof data.message === "string" &&
    data.message.trim().length > 0
  );
};

export async function POST(request: NextRequest) {
  try {
    const data: any = await request.json();

    if (!validateForm(data)) {
      return NextResponse.json({ status: 400, error: "Invalid input data" });
    }

    const isSent = await sendEmail(
      `From: ${data.email} | ${data.fullname}`,
      data.message
    );

    if (!isSent) {
      return NextResponse.json({ status: 500, error: "Failed to send email" });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500, error: "Server error" });
  }
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
    console.error("Error sending email:", error);
    return false;
  }
};
