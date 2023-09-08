import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
  require('dotenv').config();

  const nodePass = process.env.NODE_PASS;
  if (req.method === 'POST') {
    try {
      const requestBody = await req.json();
      const { name, email, message } = requestBody;
      //console.log(requestBody)

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
        to: 'sdoncaster5@gmail.com',
        subject: 'Portfolio Message',
        text: `Name: ${name}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false});
    }
  } else {
    return NextResponse.json({ success: false});
  }
}
