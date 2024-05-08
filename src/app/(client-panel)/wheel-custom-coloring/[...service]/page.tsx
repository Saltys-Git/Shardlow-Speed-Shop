"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Appointment from "@/components/Appointment";
import CarouselSection from "@/components/services/CarouselSection";
import FAQSection from "@/components/services/FAQSection";
import customColoringData from "@/data/customColoringData";

import { Spinner } from "@nextui-org/spinner";
const dynamicColorService = ({
  params,
}: {
  params: {
    service: string;
  };
}) => {
  const [serviceData, setServiceData] = useState<any>(null);

  useEffect(() => {
    // matching ID
    const foundServiceData = customColoringData.find((data) => {
      return data.Id === params.service[0];
    });

    if (foundServiceData) {
      setServiceData(foundServiceData);
    } else {
      console.error("Service data not found for:", params.service);
    }
  }, [params.service]);

  if (!serviceData) {
    return (
      <div className="bg-custom-bgColor  py-8 text-center flex justify-center items-center h-screen">
        <h1 className="text-4xl sm:text-6xl text-white">
          <Spinner
            label="Loading..."
            labelColor="warning"
            color="warning"
            size="lg"
          />
        </h1>
      </div>
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

        {/* paragraph + carousel */}
        <CarouselSection
          title={serviceData.carouselSectionTitle}
          contentUp={serviceData.carouselContentUp}
          contentDown={serviceData.carouselContentDown}
          images={serviceData.carouselImages}
        />

        {/* FAQ section  */}
        <FAQSection />

        <Appointment />
      </div>
    </>
  );
};

export default dynamicColorService;
