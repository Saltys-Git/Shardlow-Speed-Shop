"use client";

import React from "react";
import Image from "next/image";
import NavbarComponent from "../../app/(client-panel)/Navbar";

const Hero = ({
  bgSrc,
  children,
}: {
  bgSrc: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full min-h-[200px] sm:min-h-[760px]  ">
      <Image
        src={bgSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70">
        <div className="border-2 sm:border-8 border-[#C6C71D] rounded-md sm:rounded-2xl h-[160px] sm:h-[620px] m-4 sm:mt-[66px] sm:mb-[120px] sm:mx-[100px] relative bg-[#0e0c0b] bg-opacity-50 text-white p-0 sm:px-10">
          <NavbarComponent />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
