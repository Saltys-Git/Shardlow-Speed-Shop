import React, { useState } from "react";
import Card from "../card/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface HoverCardProps {
  cardData: CardData[];
  heading: string; // New heading prop
}

const HoverCard: React.FC<HoverCardProps> = ({ cardData, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-10 sm:pt-[144px] px-5 sm:px-[170px]">
      <h1 className="text-[30px] sm:text-[62px]  text-center  text-white py-5 sm:py-0 sm:pb-[57px] tracking-wide font-head">
        {heading}
      </h1>
      <div className="flex justify-end text-custom-primary my-5 space-x-4 sm:hidden">
        <span className=" bg-white border-custom-primary ">
          <ChevronLeft onClick={goToPrevSlide} />
        </span>
        <span className=" bg-white border-custom-primary">
          <ChevronRight onClick={goToNextSlide} />
        </span>
      </div>
      {/* this is for small devices */}
      <div className="block sm:hidden justify-center">
        <Card
          key={currentIndex}
          image={cardData[currentIndex].image}
          title={cardData[currentIndex].title}
          description={cardData[currentIndex].description}
        />
      </div>
      {/* this is for large devices */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center">
        {cardData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HoverCard;
