"use client";
import React from "react";
import Hero from "@/components/Hero";
import SectionOne from "@/components/services/SectionOne";
import SectionTwo from "@/components/services/SectionTwo";
import SectionThree from "@/components/services/SectionThree";
import SectionFour from "@/components/services/SectionFour";
import SectionFive from "@/components/services/SectionFive";

import CardComponent from "@/components/services/CardComponent";
import StaticCard from "@/components/services/StaticCard";
import HoverCard from "@/components/services/HoverCard";
import Appointment from "@/components/Appointment";

const wheelRepairServices: React.FC = () => {
  return (
    <>
      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20 w-full flex flex-col items-center justify-center text-center h-1/2 ">
            <h1 className="text-white text-[22px] sm:text-[62px] leading-snug font-head ">
              Our Wheel Repair Specialists Make Your Rims Look as Good as New
            </h1>
            <h1 className=" text-custom-primary text-[16px] sm:text-[38px] leading-snug w-full font-head ">
              {" "}
              We make cracks, scuffs and chips disappear in our wheel repair
              shop every day.
            </h1>
          </div>
        </Hero>
      </div>
      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full text-white">
        {/* first section ater navbar  */}
        <SectionOne
          title="Expert Wheel Repair Services for Damaged Wheels and Rims"
          subtitle="Are your alloy wheels suffering from scratches, dents, scuffs and cracks? Maybe your rims are bent out of shape or missing metal. Let our skilled team return them to their original condition."
        />
        {/* animated card  */}
        <HoverCard
          heading="Wheel Repair Service"
          cardData={[
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
            {
              image: "/dump.png",
              title: "Sand Blasting",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
          ]}
        />

        {/* section after card with bg */}
        <SectionTwo
          backgroundImageUrl="/bg.jpg"
          title="Our Guarantee Of Customer Safety"
          firstPart="Above all else, we are committed to providing safe and reliable repairs. We maintain strict service practices that all technicians follow before, during, and after a wheel repair."
          secondPart="At Alloy Wheel Repair Specialists, our guidelines – developed by experts – ensure that the wheels have undergone careful inspection before delivery to our clients. When you trust us with your wheel repair, expect excellent results based on both skill and our dedication to consumer safety."
        />
        {/* section three  */}
        <SectionThree
          title="Wheel Damage Is Hard to Avoid"
          content="Are your alloy wheels suffering from scratches, dents, scuffs, and cracks? Maybe your rims are bent out of shape or missing metal. Let our skilled team return them to their original condition."
        />
        {/* static card without animation  */}
        <StaticCard
          title="Why Do Most Wheels Need a Repair Service?"
          cardData={[
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
            {
              title: "Frontend Radio",
              imageUrl: "/img.jpg",
              description:
                "Curb scrapes can cause subtle damage that gradually adds up. Turning the wheel to leave a parking spot can also lead to scrapes and scuffs on the rim. Try to leave a safe distance between your car and the curb when you park.",
            },
          ]}
        />
        {/* section four  */}
        <SectionFour
          listItems={[
            "Progressive widening of circle",
            "Uneven wearing of tires",
            "Car drifts to one side",
            "Steering wheel vibration",
            "Reduced fuel economy",
          ]}
          buttonText="Get Wheel Repair Help"
          buttonOnClick={() => {
            console.log("clicked");
          }}
          images={["/img.jpg", "/img.jpg", "/img.jpg", "/img.jpg"]}
          title="Alloy Wheel Damage Will
          Intensify if Left
          Unrepaired"
          description="Failure to repair damaged rims can lead to more serious problems in 
          the future. Here are some possible complications."
        />
        {/* section five  */}
        <SectionFive
          title="The Alloy Wheel Repair Services You Need"
          content="When it comes to repairing alloy wheels, we know how to get the wheel repaired safely and quickly. If wheel remanufacturing is necessary, our nationwide centers offer free pick-up and delivery, with a 24-hour turnaround in most cases. From painting your rims to straightening a wheel, our team at Alloy Wheel Repair Specialists can help."
        />
        {/* image with desc  */}
        <CardComponent
          items={[
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
            {
              title: "Sand Blasting",
              img: "/img.jpg",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
            },
          ]}
        />

        {/* appointment section */}
        <Appointment />
      </div>
    </>
  );
};

export default wheelRepairServices;
