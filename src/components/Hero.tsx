"use client";

// Global Imports
import React from "react";
import Image from "next/image";

// Native Imports
import NavbarComponent from "../app/(client-panel)/Navbar";

const Hero = ({
  bgSrc,
  children,
}: {
  bgSrc: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full aspect-square sm:aspect-[2.5/1]">
      <Image
        src={bgSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 p-5 sm:p-8">
        <div
          className="flex flex-col border-1 sm:border-3 border-[#C6C71D] rounded-md sm:rounded-2xl h-full relative bg-[#0e0c0b] bg-opacity-10 text-white p-2 backdrop-blur"
        >
          <NavbarComponent />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
