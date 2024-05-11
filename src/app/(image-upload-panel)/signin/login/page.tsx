"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@nextui-org/button";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required");
      return;
    }
    const formData = new FormData();
    formData.append("email", email);

    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message);

    if (data.redirect) {
      router.push("/signin/verify");
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

          <form onSubmit={handleSubmit}>
            {" "}
            <CardContent>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="py-6 rounded-xl"
              />
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center ">
              {" "}
              <Button type="submit" className="bg-custom-primary w-full">
                Send OTP
              </Button>
              <p className="pt-3 text-red-500 text-base">{message}</p>
            </CardFooter>
          </form>
        </Card>
      </section>
    </>
  );
}
