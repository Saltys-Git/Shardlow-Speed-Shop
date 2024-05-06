import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSectionProps {
  title: string;
  contentUp: string;
  contentDown: string;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  contentUp,
  contentDown,
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

        <div className="flex justify-center ">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl  ">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <p className="container sm:text-[26px] text-[12px] py-5 font-light tracking-wider text-default-300 text-balance">
          {contentDown}
        </p>
      </div>
    </section>
  );
};

export default CarouselSection;
