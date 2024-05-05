import React from "react";
import CustomCard from "../card/CustomCard";

interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

const StaticCard: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Frontend Radio",
      imageUrl: "/img.jpg",
      description:
        "It can be tempting to temporarily continue driving with a flat tire. But driving with a puncture causes bends and cracks in your wheels. Alloy Wheel Repair Specialists can provide expert rim repair in these circumstances.",
    },
    {
      title: "Frontend Radio",
      imageUrl: "/img.jpg",
      description:
        "It can be tempting to temporarily continue driving with a flat tire. But driving with a puncture causes bends and cracks in your wheels. Alloy Wheel Repair Specialists can provide expert rim repair in these circumstances.",
    },
    {
      title: "Frontend Radio",
      imageUrl: "/img.jpg",
      description:
        "It can be tempting to temporarily continue driving with a flat tire. But driving with a puncture causes bends and cracks in your wheels. Alloy Wheel Repair Specialists can provide expert rim repair in these circumstances.",
    },
    {
      title: "Frontend Radio",
      imageUrl: "/img.jpg",
      description:
        "It can be tempting to temporarily continue driving with a flat tire. But driving with a puncture causes bends and cracks in your wheels. Alloy Wheel Repair Specialists can provide expert rim repair in these circumstances.",
    },
    {
      title: "Frontend Radio",
      imageUrl: "/img.jpg",
      description:
        "It can be tempting to temporarily continue driving with a flat tire. But driving with a puncture causes bends and cracks in your wheels. Alloy Wheel Repair Specialists can provide expert rim repair in these circumstances.",
    },
  ];
  return (
    <section className="px-[195px] pt-[105px]">
      <div>
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
