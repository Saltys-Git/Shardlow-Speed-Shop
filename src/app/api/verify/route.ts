import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.formData();
  const otp = data.get("otp") as string;

  const ipAddress = req.headers.get("x-forwarded-for") || "0.0. 0.0";

  const user = await prisma.users.findFirst({ where: { tempOTP: otp } });

  if (!user) {
    return NextResponse.json({
      message: "OTP is incorrect",
    });
  } else {
    try {
      try {
        const ipStore = await prisma.loginSessions.create({
          data: {
            ip: ipAddress,
            Users: { connect: { id: user.id } },
          },
        });
      } catch (error) {
        console.log("over her I am causing you trouble", error);
      }

      const verify = await prisma.users.update({
        where: { id: user.id },
        data: {
          tempOTP: "",
        },
      });

      return NextResponse.json(
        {
          message: "Verified",
          redirect: true,
        },
        { status: 200 }
      );
    } catch (error) {
      NextResponse.json({ message: "Something went wrong", redirect: false });
    }
  }
}
