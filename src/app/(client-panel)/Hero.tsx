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
          <div className="border-2 md:border-8 border-[#C6C71D] rounded-md md:rounded-2xl h-96 md:h-[760px] m-4 sm:m-24 relative bg-[#0e0c0b] bg-opacity-50 text-white p-0 md:px-10">
              <NavbarComponent/>
              {children}
          </div>
      </div>
    </div>
  );
};

export default Hero;
