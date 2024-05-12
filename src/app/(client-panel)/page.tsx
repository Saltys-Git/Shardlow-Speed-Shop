"use client";

// Global Imports
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Native Imports
import { Button } from "@/components/ui/button";
import Hero from "../../components/Hero";
import Slider from "@/components/card/Slider";
import ModalComponent from "@/components/ModelComponent";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-custom-bgColor h-full justify-center items-center max-w-full ">
      <Hero bgSrc={"/bg.jpg"}>
        <div className="px-5 sm:px-10 my-5 sm:my-20 w-full h-full sm:w-1/2 justify-center flex flex-col">
          <h1 className="text-custom-primary text-3xl sm:text-5xl leading-snug sm:w-2/3 font-heading font-head tracking-wide">
            Trust Us To Repair Your
            <span className="text-white"> WHEELS.</span>
          </h1>
          <p className="text-xs sm:text-xl leading-snug py-2 tracking-wide">
            The wheel repair experts. Shardlow Speed Shop brings high quality mobile
            wheel and rim repair directly to you.
          </p>
          <Button
            variant={"outline"}
            onClick={openModal}
            className="bg-transparent w-fit border-custom-primary my-2 sm:my-4 rounded-xl hover:bg-custom-primary hover:text-black"
          >
            Get A Quote
          </Button>
        </div>
      </Hero>
      <Slider />
      {/* wheel repair section  */}
      <section
        className="relative bg-custom-bgColor text-white flex justify-center sm:justify-normal items-center p-10"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="p-0 sm:p-24 w-full sm:w-1/2 relative z-10">
          <h1 className="font-primary text-[26px] sm:text-[62px] my-8 font-head tracking-wide">
            Wheel Repair Services
          </h1>
          <p className="text-[10px] sm:text-[18px] py-3 text-default-300">
            It won’t always be possible to repair damaged wheels and maintain
            vehicle safety. But thanks to OEM replacements, there’s no need to
            worry. Alloy Wheel Repair Specialists stocks a wide selection of OEM
            wheels that are exact replicas of the original rims. Plus, our
            relationship with many suppliers means we can locate even
            hard-to-find alloy wheels. <br />
            <br />
            We provide OEM replacements at affordable prices to guarantee
            authenticity and durability, with wheels coming from the original
            manufacturers. Let us know the alloy wheels you need, and we can
            track down rims that meet your exact specifications.
          </p>
          <button className="flex">
            Shop OEM Wheels
            <ChevronRight className="text-custom-primary" size={28} />
          </button>
        </div>
      </section>
      {/* WHeel custom section  */}
      <section className=" w-full h-full">
        <div
          className="flex flex-col
       justify-center items-center p-10  text-center text-white"
        >
          <h1 className="text-[25px] sm:text-6xl py-6 font-head tracking-wide">
            Wheel Custom Coloring
          </h1>
          <p className="text-[15px] px-10 w-full sm:w-2/3 sm:text-base">
            Restore your wheels to their original condition or choose a custom
            finish with our wheel custom coloring service. Powder coating offers
            a durable finish that will protect your rims, and custom painting
            lets you personalize your rims with unique color schemes and
            eye-catching designs.
          </p>
          <div>
            <Button
              variant={"outline"}
              className="bg-transparent border-custom-primary my-8 hover:bg-custom-primary hover:text-white hover:underline"
            >
              See Our Gallery
              <ChevronRight className="border-custom-primary" size={28} />
            </Button>
          </div>
        </div>
      </section>
      {/* Why chose us section  */}
      <section
        className="relative bg-white text-white flex flex-col sm:flex-row justify-center items-center p-14 space-x-8"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className=" relative z-10 ">
          <Image
            src="/video.jpg"
            alt=""
            height={350}
            width={350}
            className="m-auto my-6"
          />
        </div>
        <div className="w-full sm:w-1/2 px-0 sm:px-20">
          <h1 className="text-[22px] sm:text-[52px] font-head tracking-widemy-2 relative z-10 ">
            Why Choose Shardlow Speed Shop ltd
          </h1>
          <p className=" py-8 text-[15px] sm:text-[20px] relative z-10">
            We are one the largest provider of wheel refinishing, wheel
            re-manufacturing and wheel replacement. All our wheel repair
            processes are thoroughly researched and evaluated. Each technician
            is trained and certified. Whether you want to get your wheels
            refinished or paint. We’ll get you back on the road.
          </p>
          <Button
            variant={"outline"}
            className="bg-transparent border-custom-primary my-8 z-10 relative hover:bg-custom-primary hover:text-white hover:underline"
          >
            Find a Location
          </Button>
        </div>
      </section>
      {/* schedule section */}
      <section className=" w-full h-full">
        <div
          className="flex flex-col
       justify-center items-center p-8 sm:py-20 text-center text-white"
        >
          <h1 className="text-2xl sm:text-6xl py-3 sm:py-6 font-head tracking-wide">
            Get Your Wheels Scheduled
          </h1>
          <p className="w-full sm:w-2/3 text-sm sm:text-lg">
            Schedule today and let us help you get your wheels looking as good as new. Our mobile wheel and rim repair service is backed by both a 100% satisfaction guarantee and lifetime warranty on delamination.
          </p>
          <div>
            <Button
              variant={"outline"}
              onClick={openModal}
              className="bg-transparent border-custom-primary my-4 rounded-2xl px-8 hover:bg-custom-primary hover:text-black"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
