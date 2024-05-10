"use client";
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
    <div>
      <h1>Verify OTP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button type="submit">Verify</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
