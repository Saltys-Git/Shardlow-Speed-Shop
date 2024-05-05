"use client";
import React from "react";
import Image from "next/image";
import Hero from "../../(client-panel)/Hero";
import Card from "@/components/card/Card";
import Promise from "@/components/services/SectionTwo";
import Repair from "@/components/services/SectionOne";
import Damage from "@/components/services/SectionThree";
import Banner from "@/components/services/SectionFour";
import Cards from "@/components/services/CardComponent";
import Need from "@/components/services/SectionFive";
import Appointment from "@/components/services/SectionSix";
import SectionOne from "@/components/services/SectionOne";
import SectionTwo from "@/components/services/SectionTwo";
import SectionThree from "@/components/services/SectionThree";
import SectionFour from "@/components/services/SectionFour";
import SectionFive from "@/components/services/SectionFive";
import SectionSix from "@/components/services/SectionSix";
import CardComponent from "@/components/services/CardComponent";
import CardTWo from "@/components/card/CustomCard";
import CustomCard from "@/components/card/CustomCard";
import StaticCard from "@/components/services/StaticCard";
import HoverCard from "@/components/services/HoverCard";

const wheelRepairServices = () => {
  return (
    <>
      {/* <div className="bg-custom-bgColor h-1/2 justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20">
            <h1 className="text-white text-3xl sm:text-8xl leading-snug font-Oswald">
              Trust Us To Repair Your
            </h1>
            <h1 className="text-custom-primary"> WHEELS.</h1>
          </div>
        </Hero>z
      </div> */}

      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full text-white">
        {/* <div className="container py-10"> */}
        {/* her will be card  */}
        {/* <SectionOne /> */}
        {/* <section>
            <h1 className="text-[12px] font-Oswald sm:text-[56px]  font-normal text-center py-5 sm:pt-[134px] sm:pb-[96px] tracking-tight ">
              Wheel Repair Services
            </h1>
            <Slider />
          </section> */}
        {/* </div> */}
        {/* 
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <CardComponent />
        <SectionSix /> */}

        {/* <StaticCard /> */}
      </div>
      <HoverCard />
    </>
  );
};

export default wheelRepairServices;
