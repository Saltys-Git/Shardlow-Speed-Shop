import React from "react";

interface SectionOneProps {
  title: string;
  subtitle: string;
}

const SectionOne: React.FC<SectionOneProps> = ({ title, subtitle }) => {
  return (
    <>
      <section className="text-white container pt-16 ">
        <h1 className="text-[17px] sm:text-[58px] font-normal italic text-center sm:pt-[146px] pb-5 sm:pb-[62px] tracking-tight font-head ">
          {title}
        </h1>
        <p className=" text-center animate-slide-in  text-[12px] sm:text-2xl px-8 sm:leading-10 text-default-300 font-light tracking-wider">
          {subtitle}
        </p>
      </section>
    </>
  );
};

export default SectionOne;
