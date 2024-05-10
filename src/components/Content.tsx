// global import
import React from "react";

interface ContentProps {
  text: string;
}

const Content: React.FC<ContentProps> = ({ text }) => {
  return (
    <section className="w-full h-full pb-[95px] pt-10">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <p className="w-3/4 sm:w-2/3 text-xs sm:text-[20px] text-default-300 font-light tracking-wider sm:py-10 leading-8 ">
          {text}
        </p>
        <div></div>
      </div>
    </section>
  );
};

export default Content;
