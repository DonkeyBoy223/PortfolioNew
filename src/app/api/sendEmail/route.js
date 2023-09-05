import nodemailer from 'nodemailer';
import { NextResponse } from "next/server"

export async function POST(req, res) {
  require('dotenv').config()

  const nodePass = process.env.NODE_PASS;
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log(name)
    console.log(message)

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail', 'Yahoo', etc.
      auth: {
        user: 'sdoncaster5@gmail.com',
        pass: `${nodePass}`,
      },
    });

    // Define the email content
    const mailOptions = {
      from: `${email}`,
      to: 'test@test.com',
      subject: 'Portfolio Message',
      text: `Name: ${name}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, message: 'Error sending email' });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Method not allowed' });
  }
}
