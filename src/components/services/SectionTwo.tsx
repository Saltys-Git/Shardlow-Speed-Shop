import React, { FC } from "react";

interface SectionTwoProps {
  backgroundImageUrl: string;
  title: string;
  firstPart: string;
  secondPart: string;
}

const SectionTwo: FC<SectionTwoProps> = ({
  backgroundImageUrl,
  title,
  firstPart,
  secondPart,
}) => {
  return (
    <section
      className="bg-cover bg-center h-[732px] w-full relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-custom-bgColor opacity-65 z-0"></div>
      <div className="">
        <div className="flex flex-col justify-center  sm:items-start py-5 px-5 sm:pl-[200px] z-10 absolute inset-0 w-full sm:w-[1150px] ">
          <h1 className="text-[25px]  sm:text-[62px] text-white  sm:text-center sm:py-16 py-5 italic font-head ">
            {title}
          </h1>
          <h6 className="text-[14px] sm:text-[22px] leading-loose s:text-center sm:text-left italic text-default-300 font-light tracking-wider">
            {firstPart}
            <p className="py-8">{secondPart}</p>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
