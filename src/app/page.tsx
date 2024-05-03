import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "./(client-panel)/Hero";

export default function Home() {
  return (
    <div className="bg-[#302f2f] h-full justify-center items-center max-w-full ">
      <Hero bgSrc={"/bg.jpg"}>
        <div className="px-5 my-0 md:my-20   w-full md:w-1/2">
          <h1 className="text-[#C6C71D] text-3xl md:text-8xl leading-snug w-2/3">
            Trust Us To Repair Your
            <span className="text-white"> WHEELS.</span>
          </h1>
          <p className="text-[14px] md:text-xl  font-extralight leading-snug py-2 ">
            The wheel repair experts. WheelsOnsite® brings high quality mobile
            wheel and rim repair directly to you.
          </p>
          <Button
            variant={"outline"}
            className="bg-transparent border-[#a3a325] my-8 rounded-xl "
          >
            Get A Quote
          </Button>
        </div>
      </Hero>
      {/* wheel repair section  */}
      <section className="bg-[#2E2E1C] text-white flex justify-center md:justify-normal items-center p-10">
        <div className="p-0 md:p-24 w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl my-8 ">Wheel Repair Services</h1>
          <p className="font-extralight py-3">
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
            <ChevronRight className="text-[#a3a325]" size={28} />
          </button>
        </div>
      </section>
      {/* WHeel custom section  */}
      <section className=" w-full h-full">
        <div
          className="flex flex-col
       justify-center items-center p-20  text-center text-white"
        >
          <h1 className="text-xl md:text-4xl py-6">Wheel Custom Coloring</h1>
          <p className="font-extralight px-10 w-full md:w-2/3">
            Restore your wheels to their original condition or choose a custom
            finish with our wheel custom coloring service. Powder coating offers
            a durable finish that will protect your rims, and custom painting
            lets you personalize your rims with unique color schemes and
            eye-catching designs.
          </p>
          <div>
            <Button
              variant={"outline"}
              className="bg-transparent border-[#a3a325] my-8"
            >
              See Our Gallery
              <ChevronRight className="text-[#a3a325]" size={28} />
            </Button>
          </div>
        </div>
      </section>
      {/* Why chose us section  */}
      <section className="bg-white  flex flex-col md:flex-row justify-center items-center p-14 space-x-8">
        <div>
          <Image
            src="/video.jpg"
            alt=""
            height={350}
            width={350}
            className="m-auto my-6"
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-20">
          <h1 className="text-2xl md:text-4xl font-semibold my-2">
            Why Choose Shardlow Speed Shop ltd
          </h1>
          <p className=" py-3">
            We are the world’s largest provider of wheel refinishing, wheel
            remanufacturing and wheel replacement. All our wheel repair
            processes are thoroughly researched and evaluated. Each technician
            is trained and certified. Whether you want to get your wheels
            refinished or paint. We’ll get you back on the road.
          </p>
          <Button
            variant={"outline"}
            className="bg-transparent border-[#a3a325] my-8"
          >
            Find a Location
          </Button>
        </div>
      </section>
      {/* scadule section */}
      <section className=" w-full h-full">
        <div
          className="flex flex-col
       justify-center items-center p-8 text-center text-white"
        >
          <h1 className="text-xl md:text-4xl py-6">Schedule An Appointment</h1>
          <p className="font-extralight w-full md:w-2/3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            corrupti corporis nesciunt? Aliquam, velit tempora. Harum
            praesentium deserunt illo ex quia eos ab commodi nemo quaerat,
            perspiciatis, atque ut laboriosam.
          </p>
          <div>
            <Button
              variant={"outline"}
              className="bg-transparent border-[#a3a325] my-8 rounded-2xl px-8"
            >
              Get Startet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
