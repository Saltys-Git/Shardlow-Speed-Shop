import React from "react";

export const Service = () => {
  return (
    <>
      <section className="bg-[#2E2E1C] w-full h-2/3 flex justify-center items-center text-white lg:bg-cover lg:bg-center lg:bg-no-repeat">
        {/* Conditionally apply the background image only for larger screens */}
        <div className="p-10" style={{ backgroundImage: "url('/bg.jpg')" }}>
          <h1 className="text-2xl font-medium lg:text-3xl">
            Wheel Repair Services
          </h1>
          <p className="text-xs font-helvetica-neue">
            It won’t always be possible to repair damaged wheels and maintain
            vehicle safety. But thanks to OEM replacements, there’s no need to
            worry. Alloy Wheel Repair Specialists stocks a wide selection of OEM
            wheels that are exact replicas of the original rims. Plus, our
            relationship with many suppliers means we can locate even
            hard-to-find alloy wheels.
          </p>
          <p className="text-xs font-light lg:text-sm lg:font-normal">
            We provide OEM replacements at affordable prices to guarantee
            authenticity and durability, with wheels coming from the original
            manufacturers. Let us know the alloy wheels you need, and we can
            track down rims that meet your exact specifications.
          </p>
        </div>
      </section>
    </>
  );
};

export default Service;
