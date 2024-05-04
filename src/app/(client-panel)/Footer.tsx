import { Facebook, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const wheelRepair = [
  "Sand Blasting",
  "Dimond Cutting",
  "Crack Repair",
  "Alloy Welding",
  "Wheel Straingting",
  "Curve Repair",
  "Custon or Bespoke Request",
];

const cleanedLinks = [
  "Career",
  "Terms & Conditions",
  "Privacy Policy",
  "Company",
  "Gallery",
];
const socialMediaLinks = [
  { icon: <Facebook color="#a3a325" />, href: "#" },
  { icon: <Youtube color="#a3a325" />, href: "#" },
  { icon: <Linkedin color="#a3a325" />, href: "#" },
  { icon: <Twitter color="#a3a325" />, href: "#" },
  { icon: <Mail color="#a3a325" />, href: "#" },
];

const Footer = () => {
  return (
    <section className="flex justify-between sm:justify-around space-x-0 sm:space-x-10  items-center w-full h-full bg-white p-8">
      <div className="">
        <div className="flex py-3 space-x-3 items-center">
          <span>
            <Image src={"/logo.png"} height={25} width={25} alt="logo" />
          </span>
          <span className="text-xl sm:text-3xl">Shardlow Speed Shop</span>
        </div>
        <div>
          <h1 className="py-2 text-sm  sm:text-xl text-custom-primary text-nowrap">
            Wheel Repair Service
          </h1>
          <ul>
            {wheelRepair.map((item, idx) => (
              <li
                key={idx}
                className="text-[10px] sm:text-base py-2 text-nowrap"
              >
                • {item}
              </li>
            ))}
          </ul>
          <h1 className="py-2 text-sm sm:text-xl text-custom-primary text-nowrap">
            Wheel Custom Coloring
          </h1>
          <p className="text-[10px] sm:text-base py-1 text-nowrap">
            • Custom Dip Or Strip
          </p>
        </div>
        <div className="block sm:hidden">
          <h1 className="py-2">Connect With Us</h1>
          <div className="flex items-center space-x-4">
            {socialMediaLinks.map((link, idx) => (
              <Link href={link.href} key={idx}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5">
        <ul>
          {cleanedLinks.map((item, idx) => (
            <li key={idx} className="text-[12px] sm:text-base py-2 text-nowrap">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[10px] sm:text-base py-2 text-nowrap">
          Become an AWRS insider!
          <br />
          Join Our Email List.
        </p>
        <div className="block sm:hidden ">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-gray-100 text-[10px]  p-1  text-black rounded-xl"
          />
          <button className="text-[10px] bg-transparent border border-[#a3a325] my-2 p-1 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <h1 className="py-2 text-lg">Connect With Us</h1>
        <div className="flex items-center space-x-4">
          {socialMediaLinks.map((link, idx) => (
            <Link href={link.href} key={idx}>
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="sm:block hidden ">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-gray-100 text-[10px] sm:text-base p-1  text-black rounded-xl"
          />
          <button className="text-[10px] sm:text-base bg-transparent border border-custom-primary my-2 p-1 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
