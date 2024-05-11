"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@nextui-org/button";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!otp) {
      setMessage("OTP is required");
      return;
    }
    console.log("OTP is", otp);
    const formData = new FormData();
    formData.append("otp", otp);

    const response = await fetch("/api/verify", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setMessage(data.message);

    if (data.redirect) {
      router.push("/");
    }
  };

  return (
    <>
      {" "}
      <section className="bg-[#EAEAC7] justify-center items-center flex w-full h-screen font-inter">
        <Card className="w-96 bg-[#FFFFDB] shadow-xl text-center rounded-2xl">
          <CardHeader>
            <CardTitle className="font-inter font-semibold">
              {" "}
              Hello Admin!
            </CardTitle>
            <CardDescription className="text-base font-inter">
              Please login here
            </CardDescription>
            <Separator />
          </CardHeader>
          <CardDescription className="text-base font-inter pb-2">
            OTP
          </CardDescription>
          <form onSubmit={handleSubmit}>
            <CardContent className="flex justify-center items-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup className="bg-white ">
                  <InputOTPSlot index={0} className="px-6 py-6" />
                  <InputOTPSlot index={1} className="px-6 py-6" />
                  <InputOTPSlot index={2} className="px-6 py-6" />
                  <InputOTPSlot index={3} className="px-6 py-6" />
                  <InputOTPSlot index={4} className="px-6 py-6" />
                  <InputOTPSlot index={5} className="px-6 py-6" />
                </InputOTPGroup>{" "}
              </InputOTP>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center ">
              {" "}
              <Button type="submit" className="bg-custom-primary w-full">
                Login
              </Button>
              <p className="pt-3 text-red-500 text-base">{message}</p>
            </CardFooter>
          </form>
        </Card>
      </section>
    </>
  );
}
