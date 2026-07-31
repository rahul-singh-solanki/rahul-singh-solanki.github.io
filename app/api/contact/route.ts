import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if credentials are set
    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: smtpPort === "465", // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`, // sender address (using auth user as sender to avoid spam filters)
        replyTo: email, // user's actual email so Rahul can reply directly
        to: "rs.singh1812@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #6366f1; margin-bottom: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 15px; white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;" />
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">Sent from your portfolio contact form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 }
      );
    } else {
      // Mock mode logging
      console.log("==========================================");
      console.log("MOCK EMAIL CONTACT FORM SUBMISSION:");
      console.log(`From Name: ${name}`);
      console.log(`From Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log("==========================================");
      console.log("To send real emails, define SMTP environment variables in .env.local.");

      return NextResponse.json(
        {
          success: true,
          message: "Message received successfully! (Running in mock mode. Set up SMTP variables in .env.local to send real emails.)",
          isMock: true,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error. Failed to send message." },
      { status: 500 }
    );
  }
}
