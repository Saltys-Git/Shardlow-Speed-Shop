import React from "react";
import { Button } from "@/components/ui/button";

interface SectionSixProps {
  title: string;
  content: string;
  buttonText: string;
  buttonOnClick: () => void;
}

const SectionSix: React.FC<SectionSixProps> = ({
  title,
  content,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <section className="w-full h-full pb-[95px] pt-10">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[25px] sm:text-[62px] py-3 sm:py-6 font-head tracking-wide">
          {title}
        </h1>
        <p className="font-extralight w-3/4 sm:w-2/3 text-[11px] sm:text-[24px] text-default-300 sm:py-10 leading-6">
          {content}
        </p>
        <div>
          <Button
            variant={"outline"}
            className="bg-transparent border-custom-primary my-8 rounded-xl px-4 sm:px-14 hover:bg-custom-primary hover:text-white hover:underline sm:text-[24px]"
            onClick={buttonOnClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
