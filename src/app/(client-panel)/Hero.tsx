"use client";

import React from "react";
import Image from "next/image";
import NavbarComponent from "./Navbar";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[430px] md:min-h-dvh lg:min-h-lvh ">
      <Image
        src="/bg.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70">
        <NavbarComponent />
      </div>
      <div className="absolute inset-0 flex justify-center items-center"></div>
    </div>
  );
};

export default Hero;
