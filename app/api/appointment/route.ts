import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 👉 THIS sends mail to YOU
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // 👈 YOUR EMAIL
    subject: "New Appointment Form Submission",
    text: `
New appointment request:

Name: ${name}
Email: ${email}
Phone: ${phone}
    `,
  });

  return NextResponse.json({ success: true });
}
