import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
    }

    if (company.length < 2) {
      return NextResponse.json({ error: "Please enter your company name." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please provide more details about your project goals." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 }
      );
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

    const subject = `New Incodet consultation request from ${name}`;
    const text = [
      "New consultation request received:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      "Project Goals:",
      message,
    ].join("\n");

    const html = `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
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

    console.log("[CONTACT_REQUEST_SENT]", {
      at: new Date().toISOString(),
      name,
      email,
      company,
      toEmail,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks, your request has been received. We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your request." },
      { status: 500 }
    );
  }
}
