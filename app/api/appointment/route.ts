import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "New Form Submission";
    let html = "<p>New submission received</p>";

    // 🔹 Appointment form
    if (body.type === "appointment") {
      subject = "New Appointment Request";
      html = `
        <h2>Appointment Booking</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Contact:</b> ${body.contact}</p>
      `;
    }

    // 🔹 Home visit form
    if (body.type === "home-visit") {
      subject = "New Home Visit Request";
      html = `
        <h2>Home Visit Booking</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Location:</b> ${body.location}</p>
        <p><b>Date:</b> ${body.date}</p>
        <p><b>Time:</b> ${body.time}</p>
        <p><b>Contact:</b> ${body.contact}</p>
      `;
    }

    await transporter.sendMail({
      from: `"Poetry Dubai" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // SAME MAIL
      subject,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
