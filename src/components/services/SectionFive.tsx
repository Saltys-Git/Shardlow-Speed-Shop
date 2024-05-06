import React from "react";

interface SectionFiveProps {
  title: string;
  content: string;
}

const SectionFive: React.FC<SectionFiveProps> = ({ title, content }) => {
  return (
    <section className="sm:pt-[136px] container">
      <h1 className="text-[20px] sm:text-[62px] font-medium text-white sm:text-4xl text-center py-5 tracking-tight sm:pb-[67px]">
        {title}
      </h1>
      <p className="text-[12px] sm:text-[32px] text-default-300 leading-10 animate-slide-in text-center">
        {content}
      </p>
    </section>
  );
};

export default SectionFive;
