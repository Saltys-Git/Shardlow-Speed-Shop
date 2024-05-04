"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "../../(client-panel)/Hero";
import Slider from "@/components/Slider";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
const wheelRepairServices = () => {
  const listItems = [
    "Progressive widening of circle",
    "Uneven wearing of tires",
    "Car drifts to one side",
    "Steering wheel vibration",
    "Reduced fuel economy",
  ];
  const images = ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"];

  const list = [
    {
      title: "Orange",
      img: "/logo.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text       ever since the 1500s when an unknown printer took a galley of type      and scrambled it to make a type specimen book. It has survived not     only five centuries",
    },
    {
      title: "Sand Blasting",
      img: "/logo.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text       ever since the 1500s when an unknown printer took a galley of type      and scrambled it to make a type specimen book. It has survived not     only five centuries",
    },
    {
      title: "Raspberry",
      img: "/logo.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text       ever since the 1500s when an unknown printer took a galley of type      and scrambled it to make a type specimen book. It has survived not     only five centuries",
    },
    {
      title: "Lemon",
      img: "/logo.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text       ever since the 1500s when an unknown printer took a galley of type      and scrambled it to make a type specimen book. It has survived not     only five centuries",
    },
  ];

  return (
    <>
      {/* <div className="bg-custom-bgColor h-1/2 justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 md:my-20">
            <h1 className="text-white text-3xl md:text-8xl leading-snug font-Oswald">
              Trust Us To Repair Your
            </h1>
            <h1 className="text-custom-primary"> WHEELS.</h1>
          </div>
        </Hero>z
      </div> */}

      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full ">
        <div className="container py-10">
          <section className="text-white">
            <h1 className="text-[12px]  text-white md:text-4xl italic text-center py-5 tracking-tight ">
              Expert Wheel Repair Services for Damagaed Wheels and Rims
            </h1>
            <p className="font-light text-[10px] text-default-300">
              Are your alloy wheels suffering from scratches, dents, scuffs and
              cracks? Maybe your rims are bent out of shape or missing metal.
              Let our skilled team return them to their original condition.
            </p>
          </section>
          <section>
            <h1 className="text-[25px]  text-white md:text-4xl text-center py-5 tracking-tight ">
              Wheel Repair Services
            </h1>
            <Slider />
          </section>

          <section>
            <h1 className="text-[22px] font-medium  text-white md:text-4xl text-center py-5 tracking-tight ">
              Our Gurentee Of Customer Safety
            </h1>
            <h6 className="font-[300] text-[14px] text-default-300 leading-7">
              Above all else, we are committed to providing safe and reliable
              repairs. We maintain strict service practices that all technicians
              follow before, during and after a wheel repair.
              <p className="py-8">
                At Alloy Wheel Repair Specialists, our guidelines – developed by
                experts – ensure that the wheels have undergone careful
                inspection before delivery to our clients.
              </p>
              When you trust us with your wheel repair, expect excellent results
              based on both skill and our dedication to consumer safety.
            </h6>
          </section>
          <section>
            <h1 className="text-[22px] font-medium  text-white md:text-4xl text-center py-5 tracking-tight  ">
              Wheel Damage Is Hard to Avoid
            </h1>
            <p className="font-[300] text-[10px] text-default-300 leading- text-center">
              Are your alloy wheels suffering from scratches, dents, scuffs and
              cracks? Maybe your rims are bent out of shape or missing metal.
              Let our skilled team return them to their original condition.
            </p>
          </section>
          <Slider />
        </div>
        <section className="text-white py-10 flex flex-col md:flex-row">
          <div className="container">
            <h1 className="text-[24px] font-medium italic md:text-4xl  py-5 tracking-tight w-3/4">
              Alloy Wheel Damage Will Intensify if Left Unrepaired
            </h1>
            <p className="font-extralight text-[12px] text-default-200 tracking-tight">
              Failure to repair damaged rims can lead to more serious problems
              in the future. Here are some possible complications.
            </p>
            <ul className="py-5">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="text-custom-primary text-[30px] flex items-center space-x-3"
                >
                  <span>•</span>
                  <span className="font-extralight text-[15px] text-default-200 tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="flex hover:text-custom-primary hover:underline ">
              Get Wheel Repair Help{" "}
              <ChevronRight className="text-custom-primary" />
            </button>
          </div>
          <div
            className="bg-cover bg-center w-full mt-10 h-[200px] relative"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div className="relative z-10 flex justify-center items-center h-full">
              <div className="grid grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center bg-white overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-28 h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className=" pb-10">
            <h1 className="text-[22px] font-medium  text-white md:text-4xl text-center py-5 tracking-tight  ">
              Wheel Damage Is Hard to Avoid
            </h1>
            <p className="font-[300] text-[10px] text-default-300 leading- text-center">
              Are your alloy wheels suffering from scratches, dents, scuffs and
              cracks? Maybe your rims are bent out of shape or missing metal.
              Let our skilled team return them to their original condition.
            </p>
          </section>
          <section>
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 px-3">
              {list.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className=" relative w-full h-48">
                    <Image
                      fill={true}
                      alt={item.title}
                      className="h-[140px] rounded-lg"
                      src={item.img}
                    />
                  </div>
                  <div className="mt-3 text-white py-5 ">
                    <h2 className="text-[28px] italic  font-medium tracking-wide ">
                      {item.title}
                    </h2>
                    <p className="text-[12px] text-default-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* scadule section */}
          <section className=" w-full h-full">
            <div
              className="flex flex-col
       justify-center items-center text-center text-white"
            >
              <h1 className="text-[25px] md:text-4xl py-6">
                Schedule An Appointment
              </h1>
              <p className="font-extralight w-full md:w-2/3  text-[11px] md:text-base text-default-300 leading-5">
                Schedule WheelsOnsite today and let us help you get your wheels
                looking as good as new. ur mobile wheel and rim repair service
                is backed by both a 100% satisfaction guarantee and lifetime
                warranty on delamination.
              </p>
              <div>
                <Button
                  variant={"outline"}
                  className="bg-transparent border-custom-primary my-8 rounded-2xl px-8 hover:bg-custom-primary hover:text-white hover:underline"
                >
                  Get Startet
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default wheelRepairServices;
