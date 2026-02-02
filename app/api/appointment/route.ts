import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type, // 🔥 VERY IMPORTANT
      name,
      email,
      phone,
      message,
      date,
      time,
    } = body;

    if (!type || !name || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "New Form Submission";
    let html = "";

    // 🏠 HOME VISIT FORM
    if (type === "home-visit") {
      subject = "🏠 Home Visit Booking";
      html = `
        <h3>Home Visit Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
      `;
    }

    // 🏬 STORE APPOINTMENT FORM
    if (type === "appointment") {
      subject = "🏬 Store Appointment Request";
      html = `
        <h3>Store Appointment</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `;
    }

    // 📩 CONTACT FORM
    if (type === "contact") {
      subject = "📩 Contact Form Message";
      html = `
        <h3>Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `;
    }

    await transporter.sendMail({
      from: `"Poetry Dubai" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
