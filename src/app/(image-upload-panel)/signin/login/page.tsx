"use client";

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Send OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
