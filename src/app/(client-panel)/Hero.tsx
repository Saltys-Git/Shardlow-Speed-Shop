"use client";

import React from "react";
import Image from "next/image";
import NavbarComponent from "./Navbar";

const Hero = ({bgSrc, children}:{bgSrc:string, children: React.ReactNode,}) => {
  return (
    <div className="relative w-full min-h-[430px] md:min-h-dvh lg:min-h-lvh ">
      <Image
        src={bgSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70">
        <NavbarComponent />
        {children}
      </div>
    </div>
  );
};

export default Hero;
