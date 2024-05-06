import React from "react";

interface SectionOneProps {
  title: string;
  subtitle: string;
}

const SectionOne: React.FC<SectionOneProps> = ({ title, subtitle }) => {
  return (
    <>
      <section className="text-white container pt-16 ">
        <h1 className="text-[14px] font-Oswald sm:text-[56px] font-normal italic text-center sm:pt-[146px] pb-5 sm:pb-[62px] tracking-tight ">
          {title}
        </h1>
        <p className=" text-center animate-slide-in font-light text-[12px] sm:text-[28px] px-8 sm:leading-10 text-default-300">
          {subtitle}
        </p>
      </section>
    </>
  );
};

export default SectionOne;
