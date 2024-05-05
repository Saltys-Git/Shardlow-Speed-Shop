import React from "react";
import Card from "../card/Card";

const HoverCard = () => {
  const cardData = [
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      image: "/dump.png",
      title: "Sand Blasting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-44">
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
