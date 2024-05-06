import Image from "next/image";
import React from "react";

interface CardItem {
  title: string;
  img: string;
  desc: string;
}

interface CardComponentProps {
  items: CardItem[];
}

const CardComponent: React.FC<CardComponentProps> = ({ items }) => {
  return (
    <div className="px-14 sm:px-44 pt-10 sm:pt-[132px]">
      <section>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-3 px-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-48 sm:h-80">
                <Image
                  fill={true}
                  alt={item.title}
                  className="h-[140px] rounded-lg"
                  src={item.img}
                />
              </div>
              <div className="text-white pt-4 sm:pt-10 sm:pb-[105px] w-full sm:w-5/6">
                <h2 className="text-[20px] sm:text-[42px] italic font-head tracking-wide">
                  {item.title}
                </h2>
                <p className="text-[10px] sm:text-[14px] text-default-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardComponent;
