import React from "react";
import "./style.css";
import { ChevronRight } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="py-10">
      <div className="card">
        <img src={image} alt="" className="border-b-[12px] border-[#eaeb88]" />
        <div className="info">
          <div className="flex-col justify-center items-center text-black px-8">
            <div className="flex justify-center items-center text-[32px]">
              <h1 className="py-3 font-medium  italic capitalize">{title}</h1>
              <button>
                <ChevronRight className="text-[#c3c53a]" size={45} />
              </button>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
