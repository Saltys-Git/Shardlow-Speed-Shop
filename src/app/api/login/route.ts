import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");
import crypto from "crypto";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS,
  },
});

// Generate OTP
function generateOTP() {
  return crypto.randomBytes(3).toString("hex").toUpperCase();
}

export async function POST(req: Request) {
  const data = await req.formData();
  const email = data.get("email") as string;

  const user = await prisma.users.findFirst({ where: { email: email } });

  const otp = generateOTP();

  if (!user) {
    return NextResponse.json({ message: "Email not Exist" }, { status: 404 });
  }

  try {
    await prisma.users.update({
      where: { id: user!.id },
      data: { tempOTP: otp },
    });

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Sharlod Speed Shop ltd login OTP",
      html: `
    <html>
      <head>
        <style>
  
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

        
          h1 {
            color: #007bff;
          }
          h2 {
            color: #000;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sharlod Speed Shop Login OTP</h1>
          <h2>${otp}</h2>
          <p>Please don't share to anyone</p>
        </div>
      </body>
    </html>
  `,
    };

    transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "OTP sent successfully",
        redirect: true,
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "OTP sent failed" }, { status: 404 });
  }
}
