import React from "react";

const SectionTwo = () => {
  return (
    <section
      className="bg-cover bg-center h-[732px] w-full relative"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-custom-bgColor opacity-60 z-0"></div>
      <div className="container">
        <div className="flex flex-col justify-center  md:items-start py-5 px-0 md:px-20 z-10 absolute inset-0 w-full md:w-2/3">
          <h1 className="text-[22px] font-medium font-Oswald md:text-[52px] text-white tracking-tight text-center py-6">
            Our Guarantee Of Customer Safety
          </h1>
          <h6 className="text-[14px] md:text-[22px] font-medium leading-7 text-center md:text-left">
            Above all else, we are committed to providing safe and reliable
            repairs. We maintain strict service practices that all technicians
            follow before, during, and after a wheel repair.
            <p className="py-8">
              At Alloy Wheel Repair Specialists, our guidelines – developed by
              experts – ensure that the wheels have undergone careful inspection
              before delivery to our clients.
            </p>
            When you trust us with your wheel repair, expect excellent results
            based on both skill and our dedication to consumer safety.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
