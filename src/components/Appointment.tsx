// Global Imports
import React from "react";

// Native Imports
import { Button } from "@/components/ui/button";

const Appointment: React.FC = () => {
  return (
    <section className="w-full h-full pb-[95px] pt-10">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[32px] sm:text-[62px] py-3 sm:py-6 font-head tracking-wide">
          Schedule An Appointment
        </h1>
        <p className="w-3/4 sm:w-2/3 text-[22px] sm:text-[24px] text-default-300 font-light tracking-wider sm:py-10 leading-8 ">
          Schedule WheelsOnsite today and let us help you get your wheels
          looking as good as new. Our mobile wheel and rim repair service is
          backed by both a 100% satisfaction guarantee and lifetime warranty on
          delamination.
        </p>
        <div>
          <Button
            variant={"outline"}
            className="bg-transparent border-custom-primary my-8 rounded-xl px-4 sm:px-14 hover:bg-custom-primary hover:text-white hover:underline sm:text-[24px]"
          >
            Get Startet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
