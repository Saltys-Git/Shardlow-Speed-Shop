"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Appointment from "@/components/Appointment";
import CarouselSection from "@/components/services/CarouselSection";
import FAQSection from "@/components/services/FAQSection";
import repairData from "@/data/repairData";
import Carousel from "@/components/card/Carousol";

const dynamicRepairService = ({
  params,
}: {
  params: {
    service: string;
  };
}) => {
  const [serviceData, setServiceData] = useState<any>(null);

  useEffect(() => {
    // matching ID
    const foundServiceData = repairData.find((data) => {
      return data.service === params.service[0];
    });

    if (foundServiceData) {
      setServiceData(foundServiceData);
    } else {
      console.error("Service data not found for:", params.service);
    }
  }, [params.service]);

  if (!serviceData) {
    return (
      // <div className="bg-gray-900 text-white py-8 text-center flex justify-center items-center h-screen">
      //   <h1 className="text-4xl sm:text-6xl">404 Not Found</h1>
      // </div>
      <Carousel />
    );
  }

  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20 w-full flex items-center justify-center text-center h-1/2 ">
            <h1 className="text-white text-[42px] sm:text-[88px] leading-snug font-heading font-head tracking-wide">
              {serviceData.title}
            </h1>
          </div>
        </Hero>

        {/* paragraphn + carousel  */}
        <CarouselSection
          title={serviceData.carouselTitle}
          contentUp={serviceData.carouselContentUp}
          contentDown={serviceData.carouselContentDown}
        />

        {/* FAQ section  */}
        <FAQSection />

        <Appointment />
      </div>
    </>
  );
};

export default dynamicRepairService;
