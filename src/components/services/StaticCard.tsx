// Global Imports
import React, { FC } from "react";

// Native Imports
import CustomCard from "../card/CustomCard";

interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

interface StaticCardProps {
  title: string;
  cardData: CardData[];
}

const StaticCard: FC<StaticCardProps> = ({ title, cardData }) => {
  return (
    <section className="sm:px-[195px] sm:pt-[105px]">
      <h1 className="text-[18px] sm:text-[62px] text-white py-10 sm:py-0 sm:pb-[57px] font-head tracking-wide text-center">
        {title}
      </h1>
      <div className="px-10 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cardData.map((data, index) => (
            <div key={index}>
              <CustomCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaticCard;
