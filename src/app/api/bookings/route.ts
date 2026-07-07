import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    console.log("Received booking data:", body);

    // 1. Extract everything using consistent names
    const name = (body.name || body.clientName || "").trim();
    const email = (body.email || body.clientEmail || "").trim();
    const company = (body.company || "").trim(); 
    const message = (body.message || body.projectDetails || "").trim();
    const date = body.date;
    const timeSlot = body.timeSlot;

    // 2. Run Validations
    if (!date || !timeSlot) {
      return NextResponse.json({ error: "Date and time are required" }, { status: 400 });
    }
    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    // Made company optional! If you want it required, change this back to (company.length < 2)
    if (body.company !== undefined && company.length === 0) {
      return NextResponse.json({ error: "Please enter your company name." }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please provide more details about your project goals (min 10 chars)." },
        { status: 400 }
      );
    }

    // 3. Save to Database
    const newBooking = await Booking.create({
      meetingTypeId: "000000000000000000000000", 
      clientName: name,     // Mapped correctly now
      clientEmail: email,   // Mapped correctly now
      date,
      message,
      timeSlot,
      status: "confirmed"
    });

    // 4. Setup Email Delivery
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
      console.warn("Email delivery is not configured. Booking saved, but email skipped.");
      return NextResponse.json({ success: true, booking: newBooking, emailSent: false }, { status: 201 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 5. Send the Email
    const subject = `New Booking: ${name} on ${date} at ${timeSlot}`;
    const text = [
      "New consultation request received:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      `Booking Confirmed: Discovery Call on ${date} at ${timeSlot}`,
      "Project Goals:",
      message,
    ].join("\n");

    const html = `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Booking Confirmed:</strong> Discovery Call on ${date} at ${timeSlot}</p>
      <p><strong>Project Goals:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log("[BOOKING_SUCCESS]", { at: new Date().toISOString(), name, email, date });

    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });

  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}