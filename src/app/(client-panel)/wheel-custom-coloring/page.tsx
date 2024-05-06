"use client";
import React from "react";
import Hero from "@/components/services/Hero";
import SectionOne from "@/components/services/SectionOne";
import SectionTwo from "@/components/services/SectionTwo";
import SectionThree from "@/components/services/SectionThree";
import SectionFour from "@/components/services/SectionFour";
import SectionFive from "@/components/services/SectionFive";
import SectionSix from "@/components/services/SectionSix";
import CardComponent from "@/components/services/CardComponent";
import StaticCard from "@/components/services/StaticCard";
import HoverCard from "@/components/services/HoverCard";

const wheelCustomColoring = () => {
  return (
    <>
      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-2 sm:px-5 text-center text-white my-0 sm:my-20 w-full italic">
            <h1 className="text-[11px] sm:text-[50px] leading-snug w-full  sm:py-5">
              Professional Wheel Custom Coloring – The Finest Rim Painting &
              Powder Coating
            </h1>
            <h1 className=" text-custom-primary text-[8.5px] sm:text-[38px] leading-snug w-full  ">
              Let us customize your wheels with high-quality finishes in the
              colors of your choice.
            </h1>
          </div>
        </Hero>
      </div>
      <div className="bg-custom-bgColor h-full justify-center items-center max-w-full text-white">
        {/* first section ater navbar  */}
        <SectionOne
          title="Customized Alloy Wheel Painting Services From a Location Near You"
          subtitle="Restore your wheels to their original condition or choose a customized look 
          that stands out from the crowd. Our technicians have the expertise to upgrade 
          your vehicle with sleek and durable rim designs."
        />
        {/* animated card  */}
        <HoverCard
          cardData={[
            {
              image: "/dump.png",
              title: "Sand Blasting 1",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 2",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 3",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 4",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 5",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 6",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
            {
              image: "/dump.png",
              title: "Sand Blasting 7",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            },
          ]}
        />

        {/* section after card with bg */}
        <SectionTwo
          backgroundImageUrl="/bg.jpg"
          title="Our Commitment to Excellence"
          firstPart="Most paint and powder coating issues occur due to poor quality of 
          finish. These issues often stem from a lack of prepping and cleaning – 
          that’s exactly why our approach demands attention to the finest detail.
         "
          secondPart=" The pros at Alloy Wheel Repair Specialists are dedicated to providing the 
          finest wheel coloring service to our customers.
          We guarantee a high-quality finish that meets the vision and 
          expectations of our customers."
        />
        {/* section three  */}
        <SectionThree
          title="Wheel Coloring Takes Your Vehicle to the Next Levels"
          content="Wheel Coloring Takes Your Vehicle to the Next Level
          Most wheels go through a lot over the years. Potholes, curbs, dirt and 
          debris all take a toll on alloy rims. Wheel coloring will give your rims a new 
          lease on life and make an instant impression, too – all at an affordable cost."
        />
        {/* static card without animation  */}
        <StaticCard
          title="What Are the Main Benefits of Custom Coloring?"
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
            "Add a secondary accent color",
            "Leave some visible wheel texture",
            "Choose an eye-catching gunmetal look",
            "Color match your wheels to your vehicle",
            "Opt for a gloss, satin or matte finish",
          ]}
          buttonText="Request a Custom Wheel Coloring Quote"
          buttonOnClick={() => {
            console.log("clicked");
          }}
          images={["/img.jpg", "/img.jpg", "/img.jpg", "/img.jpg"]}
          title="There Is No Limit to the
          Design Options With
        Custom Wheel Coloring"
          description="Rim wheel paint and powder coating provide many stylish design choices 
      to accentuate your wheels."
        />
        {/* section five  */}
        <SectionFive
          title="The Alloy Wheel Repair Services You Need"
          content="The Alloy Wheel Repair Services You Need
          When it comes to repairing alloy wheels, we know how to get the wheel 
          repaired safely and quickly. If wheel remanufacturing is necessary, our 
          nationwide centers offer free pick-up and delivery, with a 24-hour 
          turnaround in most cases. From painting your rims to straightening a 
          wheel, our team at Alloy Wheel Repair Specialists can help."
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
        <SectionSix
          title="Schedule An Appointment"
          content="Schedule WheelsOnsite today and let us help you get your wheels looking as good as new. Our mobile wheel and rim repair service is backed by both a 100% satisfaction guarantee and lifetime warranty on delamination."
          buttonText="Get Started"
          buttonOnClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </>
  );
};

export default wheelCustomColoring;
