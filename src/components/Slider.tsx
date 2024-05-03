"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const list = [
    {
      title: "Dimond Cutting",
      img: "/logo.png",
      desc: "lorem Ips incorrectly translated into HTML without any translation. lorem ipsum dolor sit am velit lob tempor",
    },
    {
      title: "Tangerine",
      img: "/video.jpg",
      desc: "lorem Ips incorrectly translated into HTML without any translation. lorem ipsum dolor sit am velit lob tempor",
    },
    {
      title: "Raspberry",
      img: "/logo.png",
      desc: "lorem Ips incorrectly translated into HTML without any translation. lorem ipsum dolor sit am velit lob tempor",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className=" flex flex-col relative">
      <h1 className="text-xl text-white md:text-4xl font-semibold text-center pt-10 ">
        Alloy Wheel Repair Specialists
      </h1>
      <div className="px-14 pb-10">
        <div className="flex justify-end text-[#bebe23] my-5 space-x-4 md:hidden">
          <span className=" bg-white border-[#bebe23] ">
            <ChevronLeft onClick={goToPrevSlide} />
          </span>
          <span className=" bg-white border-[#bebe23]">
            <ChevronRight onClick={goToNextSlide} />
          </span>
        </div>
        <div className="block md:hidden">
          <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={list[currentIndex].title}
                className="w-full object-cover h-[250px]"
                src={list[currentIndex].img}
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start">
              <b className="text-2xl font-semibold">
                {list[currentIndex].title}
              </b>
              <p className="text-default-500 py-1 text-sm text-left">
                {list[currentIndex].desc}
              </p>
              <Link
                href={"/"}
                className="text-[#bebe23] border-b border-[#bebe23]"
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="hidden gap-20 md:grid grid-cols-2 sm:grid-cols-3 px-44 py-20">
          {list.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              className=""
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[280px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <b className="text-3xl font-semibold">{item.title}</b>
                <p className="text-default-500 py-2 text-left">{item.desc}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center hidden sm:block">
          <button className="text-white text-lg underline ">See More</button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
