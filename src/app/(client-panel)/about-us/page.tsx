// Global Imports
import React from "react";
import Image from "next/image";

// Native Imports
import Appointment from "@/components/Appointment";
import Hero from "@/components/Hero";

const aboutUs = () => {
  const teamData = [
    {
      id: 1,
      src: "/img.jpg",
      width: 357,
      height: 439,
      alt: "logo",
      text: "Tamim Hosain",
    },
    {
      id: 2,
      src: "/img.jpg",
      width: 357,
      height: 439,
      alt: "logo",
      text: "Tamim Hosain",
    },
    {
      id: 3,
      src: "/img.jpg",
      width: 357,
      height: 439,
      alt: "logo",
      text: "Tamim Hosain",
    },
    {
      id: 4,
      src: "/img.jpg",
      width: 357,
      height: 439,
      alt: "logo",
      text: "Tamim Hosain",
    },
  ];

  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="w-full h-full flex items-center justify-center text-center px-10 sm:px-20">
            <h1 className="text-white text-2xl sm:text-6xl leading-snug font-heading font-head tracking-wide">
              About Us
            </h1>
          </div>
        </Hero>
        {/* contact section  */}
        <section className="container sm:pt-[138px] py-10 sm:pb-[195px] text-center font-head text-white">
          <h1 className="text-[32px] sm:text-[62px]">
            Save Time and Money With Alloy Wheel Repair Specialists
          </h1>
          <p className="sm:text-[32px] font-light sm:container sm:pt-[74px] tracking-wider text-default-300">
            Each of our wheel repair processes has been thoroughly researched
            and evaluated. Every technician on our team is expertly trained and
            certified to repair alloy wheels. It’s usually much more
            cost-effective to repair a wheel than to replace it, and we can
            complete most alloy wheel repairs in 24 hours or less. So whether
            you’re getting a wheel straightened, repairing curb rash, or getting
            all four rims powder coated, we’ll get you back on the road as
            quickly and safely as possible.
          </p>
        </section>
        <section
          className="relative  text-white"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-custom-bgColor opacity-65 z-0"></div>
          <div className="relative z-10  container py-10">
            <h1 className="text-[32px] font-head sm:text-[52px]">Our Story</h1>
            <p className="sm:text-[22px] font-light  tracking-wider sm:w-1/2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </section>

        <section className="bg-[#EBEBD4] py-10 ">
          <div className="flex flex-col justify-center items-center sm:flex-row container ">
            <div>
              <h1 className="text-[32px] text-center sm:text-[32px] font-head">
                Our Mission
              </h1>
              <p className="sm:text-[18px] font-light sm:container  text-center tracking-wider  py-5">
                has been the industry&apos;s standard dummy text ever since the
                1500s, when an unknown
              </p>
            </div>
            <div>
              <h1 className="text-[32px] text-center sm:text-[32px] font-head">
                Our Vision
              </h1>
              <p className="sm:text-[18px] font-light sm:container  text-center tracking-wider  py-5">
                has been the industry&apos;s standard dummy text ever since the
                1500s, when an unknown
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <h1 className="text-[32px]  sm:text-[62px] text-white  text-center sm:py-16 py-5 italic font-head tracking-wide">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9 justify-center items-center container">
            {teamData.map((item) => (
              <div key={item.id} className="relative">
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  objectFit="cover"
                  className="w-[357px] h-[439px] rounded-lg"
                />
                <p className="absolute bottom-0 left-12 right-12 text-center bg-white rounded-3xl py-2 mb-10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Appointment />
      </div>
    </>
  );
};

export default aboutUs;
