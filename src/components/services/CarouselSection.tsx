// Global Imports
import React from "react";

// Native Imports
import Carousel from "../Carousel";

interface CarouselSectionProps {
  title: string;
  contentUp: string;
  contentDown: string;
  images: string[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  contentUp,
  contentDown,
  images,
}) => {
  return (
    <section
      className="text-white relative min-h-screen"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="text-center py-5 relative z-10">
        <h1 className="container text-center py-5 font-head text-[32px] sm:text-[62px]">
          {title}
        </h1>
        <p className="container sm:text-[26px] text-[12px] pb-5 font-light tracking-wider text-default-300 text-balance">
          {contentUp}
        </p>

        <div>
          <Carousel images={images} />
        </div>

        <p className="container sm:text-[26px] text-[12px] py-5 font-light tracking-wider text-default-300 text-balance">
          {contentDown}
        </p>
      </div>
    </section>
  );
};

export default CarouselSection;
