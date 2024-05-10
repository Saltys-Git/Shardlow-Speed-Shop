"use client";

// Global Imports
import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Tabs, Tab } from "@nextui-org/react";
import Hero from "@/components/Hero";

// Native Imports

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

  // image dataset

  const images1 = [
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
  const images2 = [
    {
      image1: [
        { srcOne: "/logo.png", alt: "Image one" },
        { srcTwo: "/bg.jpg", alt: "Image two" },
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
  const images3 = [
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
  const images4 = [
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
  const images5 = [
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

  const color = "#C6C71D";
  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full text-white ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="w-full h-full flex items-center justify-center text-center px-10 sm:px-20">
            <h1 className="text-white text-2xl sm:text-6xl leading-snug font-heading font-head tracking-wide">
              Shardlow Speed Shop ltd and Wheel Refinishing Gallery
            </h1>
          </div>
        </Hero>

        <section>
          <h1 className="text-[32px]  sm:text-[62px] text-white  text-center sm:py-16 py-5 italic font-head tracking-wide  container">
            Our work speaks for itself.
          </h1>
          <div className="container">
            <Tabs className="justify-center items-center min-w-full rounded-xl text-custom-primary ">
              {items.map((item, index) => (
                <Tab
                  key={index}
                  className="uppercase text-black text-[5px] sm:text-[15px]  sm:py-2 font-light px-1 sm:px-3"
                  title={item.name}
                >
                  {/* section 1 */}
                  {item.name === "MOBILE WHEEL REPAIR" && (
                    <section className=" grid grid-cols-2 sm:grid-cols-3 gap-2 py-5 items-center justify-center  max-w-full">
                      {images1.map((item, index) => (
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
                                <div className="absolute top-0 left-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
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
                                <div className="absolute top-0 right-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
                                  After
                                </div>
                              </div>
                            }
                          />
                        </div>
                      ))}
                    </section>
                  )}{" "}
                  {/* section 2 */}
                  {item.name === "SPECIALTY SHOP REPAIR" && (
                    <section className=" grid grid-cols-2 sm:grid-cols-3 gap-5 py-5 sm:py-20">
                      {images2.map((item, index) => (
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
                                <div className="absolute top-0 left-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
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
                                <div className="absolute top-0 right-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
                                  After
                                </div>
                              </div>
                            }
                          />
                        </div>
                      ))}
                    </section>
                  )}{" "}
                  {/* section 3*/}
                  {item.name === "CUSTOM REFINISHING" && (
                    <section className=" grid grid-cols-2 sm:grid-cols-3 gap-5 py-5 sm:py-20">
                      {images3.map((item, index) => (
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
                                <div className="absolute top-0 left-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
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
                                <div className="absolute top-0 right-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
                                  After
                                </div>
                              </div>
                            }
                          />
                        </div>
                      ))}
                    </section>
                  )}
                  {/* section 4 */}
                  {item.name === "POWDER COATING" && (
                    <section className=" grid grid-cols-2 sm:grid-cols-3 gap-5 py-5 sm:py-20">
                      {images4.map((item, index) => (
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
                                <div className="absolute top-0 left-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
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
                                <div className="absolute top-0 right-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
                                  After
                                </div>
                              </div>
                            }
                          />
                        </div>
                      ))}
                    </section>
                  )}
                  {/* section 5 */}
                  {item.name === "BRAKE CALIPERS" && (
                    <section className=" grid grid-cols-2 sm:grid-cols-3 gap-5 py-5 sm:py-20">
                      {images5.map((item, index) => (
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
                                <div className="absolute top-0 left-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
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
                                <div className="absolute top-0 right-0 text-black m-4 p-1  tracking-wider bg-custom-primary rounded-lg sm:text-xl">
                                  After
                                </div>
                              </div>
                            }
                          />
                        </div>
                      ))}
                    </section>
                  )}
                </Tab>
              ))}
            </Tabs>
          </div>
        </section>

        {/* <Appointment /> */}
      </div>
    </>
  );
};

export default Gallery;
