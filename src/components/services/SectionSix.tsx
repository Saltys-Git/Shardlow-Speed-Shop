import React from "react";
import { Button } from "@/components/ui/button";
const SectionSix = () => {
  return (
    <>
      <section className=" w-full h-full pb-[95px]">
        <div
          className="flex flex-col
justify-center items-center text-center text-white"
        >
          <h1 className="text-[25px] md:text-[62px] py-6">
            Schedule An Appointment
          </h1>
          <p className="font-extralight w-full md:w-2/3  text-[11px] md:text-[24px] text-default-300 py-10 ">
            Schedule WheelsOnsite today and let us help you get your wheels
            looking as good as new. ur mobile wheel and rim repair service is
            backed by both a 100% satisfaction guarantee and lifetime warranty
            on delamination.
          </p>
          <div>
            <Button
              variant={"outline"}
              className="bg-transparent border-custom-primary my-8 rounded-xl px-8 sm:px-14 hover:bg-custom-primary hover:text-white hover:underline sm:text-[24px]"
            >
              Get Startet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSix;
