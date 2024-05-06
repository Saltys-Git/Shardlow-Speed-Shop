import React, { FC } from "react";

interface SectionThreeProps {
  title: string;
  content: string;
}

const SectionThree: FC<SectionThreeProps> = ({ title, content }) => {
  return (
    <section className="text-center pt-[80px] sm:pt-[145px] container">
      <h1 className="text-[22px] sm:text-[62px] font-medium  text-white py-5 sm:py-0 sm:pb-[57px] tracking-tight">
        {title}
      </h1>
      <p className="text-[10px] sm:text-[22px] text-center animate-slide-in text-default-300 sm:leading-7">
        {content}
      </p>
    </section>
  );
};

export default SectionThree;
