"use client";

// Global Imports
import React, { useState } from "react";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// Native Imports
import Appointment from "@/components/Appointment";
import Hero from "@/components/Hero";

const Gallery = () => {
  const [activeLink, setActiveLink] = useState("/");

  const items = [
    {
      name: "MOBILE WHEEL REPAIR",
      link: "/",
    },
    {
      name: "SPECIALTY SHOP REPAIR",
      link: "/1",
    },
    {
      name: "CUSTOM REFINISHING",
      link: "/2",
    },
    {
      name: "POWDER COATING",
      link: "/3",
    },
    {
      name: "BRAKE CALIPERS",
      link: "/4",
    },
  ];
  const images = [
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/logo.png", alt: "Image two" },
      ],
    },
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/img.jpg", alt: "Image two" },
      ],
    },
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/img.jpg", alt: "Image two" },
      ],
    },
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/img.jpg", alt: "Image two" },
      ],
    },
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/img.jpg", alt: "Image two" },
      ],
    },
    {
      image1: [
        { srcOne: "/bg.jpg", alt: "Image one" },
        { srcTwo: "/img.jpg", alt: "Image two" },
      ],
    },
  ];
  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full text-white ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20 w-full flex items-center justify-center text-center h-1/2 ">
            <h1 className="text-white text-[42px] sm:text-[88px] leading-snug font-heading font-head tracking-wide">
              Shardlow Speed Shop ltd and Wheel Refinishing Gallery
            </h1>
          </div>
        </Hero>

        <section>
          <h1 className="text-[32px]  sm:text-[62px] text-white  text-center sm:py-16 py-5 italic font-head tracking-wide  container">
            Our work speaks for itself.
          </h1>
          <div className="container">
            <ul className="grid grid-cols-5 bg-[#EBEBD4]">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`uppercase text-black text-[5px] sm:text-[15px] text-center py-2 font-light ${
                    activeLink === item.link ? "bg-custom-primary" : ""
                  }`}
                  onClick={() => setActiveLink(item.link)}
                >
                  <Link href={item.link} className="block w-full h-full">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* compare imge  */}
        <section className="container grid grid-cols-2 sm:grid-cols-3 gap-5 py-5 sm:py-20">
          {images.map((item, index) => (
            <div
              key={index}
              className="w-[160px] min-h-[160px] sm:w-[420px] sm:min-h-[420px] rounded-xl  sm:my-5"
            >
              <ReactCompareSlider
                itemOne={
                  <div className="relative">
                    <ReactCompareSliderImage
                      src={item.image1[0].srcOne}
                      alt={item.image1[0].alt}
                      className="w-[160px] min-h-[160px] sm:w-[420px] sm:min-h-[420px] object-fill rounded-xl"
                    />
                    <div className="absolute top-0 left-0 text-white  p-4  tracking-wider  text-xl">
                      Before
                    </div>
                  </div>
                }
                itemTwo={
                  <div className="relative">
                    <ReactCompareSliderImage
                      src={item.image1[1].srcTwo}
                      alt={item.image1[1].alt}
                      className="w-[160px] min-h-[160px] sm:w-[420px] sm:min-h-[420px] object-fill rounded-xl"
                    />
                    <div className="absolute top-0 right-0 text-white p-4  tracking-wider  text-xl">
                      After
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </section>
        <Appointment />
      </div>
    </>
  );
};

export default Gallery;
