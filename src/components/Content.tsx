// global import
import React from "react";

interface ContentProps {
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ title, text }) => {
  return (
    <section className="w-full h-full pb-[95px] pt-10">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[32px] sm:text-[62px] py-3 sm:py-6 font-head tracking-wide">
          {title}
        </h1>
        <p className="w-3/4 sm:w-2/3 text-[18px] sm:text-[20px] text-default-300 font-light tracking-wider sm:py-10 leading-8 ">
          {text}
        </p>
        <div></div>
      </div>
    </section>
  );
};

export default Content;
