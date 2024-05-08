"use client";

// Global Imports
import React from "react";

// Native Imports
import Appointment from "@/components/Appointment";
import Hero from "@/components/Hero";
import FAQSection from "@/components/services/FAQSection";
import { Button } from "@/components/ui/button";

const careers = () => {
  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20 w-full flex items-center justify-center text-center h-1/2 ">
            <h1 className="text-white text-[42px] sm:text-[88px] leading-snug font-heading font-head tracking-wide">
              Careers
            </h1>
          </div>
        </Hero>

        <section
          className="relative  text-white sm:mt-[138px]"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
          <div className="relative z-10  container py-10">
            <h1 className="text-[32px] font-head sm:text-[52px] py-5">
              What is Lorem Ipsum
            </h1>
            <p className=" text-[16px] sm:text-[22px] font-light   sm:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsuLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including
            </p>
            <Button className="bg-custom-primary text-white hover:bg-transparent hover:text-custom-primary rounded-2xl my-5">
              Apply Now
            </Button>
          </div>
        </section>

        <section
          className="relative py-5 sm:py-20 sm:mt-[138px]"
          style={{ backgroundImage: "url(/bg.jpg)" }}
        >
          <div className="bg-[#EBEBD4] absolute inset-0 z-0 opacity-80"></div>
          <div className="relative z-10  container">
            <h1 className="text-center  font-head text-[32px] sm:text-[62px]">
              Our Values
            </h1>
            <p className="sm:text-[20px] text-[12px] sm:py-16 py-5  font-[san]  text-default-700 text-center ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="flex justify-center items-center relative z-10 sm:flex-row container leading-4  ">
            <div className="px-3">
              <h1 className="text-[16px] text-center sm:text-[32px] font-head">
                Hand-on work
              </h1>
              <p className="text-[12px] sm:text-[18px] font-light sm:container text-center  py-5">
                Independent work day-to-day, with management support, as you are
                in the field compared to reporting to a dedicated shop or route
              </p>
            </div>
            <div className="px-3">
              <h1 className="text-[16px] text-center sm:text-[32px] font-head">
                Work dependency
              </h1>
              <p className="text-[12px] sm:text-[18px] font-light sm:container text-center  py-5">
                Independent work day-to-day, with management support, as you are
                in the field compared to reporting to a dedicated shop or route
              </p>
            </div>
            <div className="px-3">
              <h1 className="text-[16px] text-center sm:text-[32px] font-head">
                Social information
              </h1>
              <p className="text-[12px] sm:text-[18px] font-light sm:container text-center  py-5">
                Independent work day-to-day, with management support, as you are
                in the field compared to reporting to a dedicated shop or route
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
        <Appointment />
      </div>
    </>
  );
};

export default careers;
