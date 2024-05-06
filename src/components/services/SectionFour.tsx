import React, { FC } from "react";
import { ChevronRight } from "lucide-react";

interface SectionFourProps {
  listItems: string[];
  buttonText: string;
  buttonOnClick: () => void;
  images: string[];
  title: string;
  description: string;
}

const SectionFour: FC<SectionFourProps> = ({
  listItems,
  buttonText,
  buttonOnClick,
  images,
  title,
  description,
}) => {
  return (
    <section className="text-white py-10 sm:py-0 sm:pt-[139px] flex flex-col sm:flex-row text-left sm:items-center">
      <div className="w-full sm:w-[1500px] py-10 h-full sm:h-[740px] flex flex-col sm:justify-center sm:items-center">
        <div className="w-full sm:w-2/3 px-5 sm:px-0 text-center animate-slide-in sm:text-left ">
          <h1 className="text-[24px] sm:text-[55px] font-medium italic sm:text-4xl py-5 sm:py-0 text-start  sm:leading-[4.5rem] text-balance">
            {title}
          </h1>

          <p className="font-extralight text-[12px] sm:text-[22px] text-default-200 tracking-tight text-left">
            {description}
          </p>
          <ul className="py-5 flex flex-col sm:items-start">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-custom-primary text-[30px] sm:text-[32px] flex items-center space-x-3"
              >
                <span>•</span>
                <span className="font-extralight text-[15px] sm:text-[30px] text-default-200 tracking-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button
            className="flex hover:text-custom-primary hover:underline justify-center sm:justify-start sm:text-[30px]"
            onClick={buttonOnClick}
          >
            {buttonText}
            <ChevronRight
              className="text-custom-primary sm:hidden block"
              size={30}
            />
            <ChevronRight
              className="text-custom-primary hidden sm:block"
              size={50}
            />
          </button>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-full mt-10 sm:mt-0 h-[200px] sm:h-[740px]  relative "
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 flex justify-center items-center h-full  ">
          <div className="grid grid-cols-2 gap-6 sm:gap-20 sm:h-[500px] sm:w-[600px]">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-28 sm:w-full h-20 sm:h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
