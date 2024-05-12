// Global Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";


import {FaYoutube, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import {FaMapLocationDot, FaXTwitter} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const helpAndInformationLinks = [
  {
    name: "Career",
    href: "#",
  },
  {
    name: "Terms & Conditions",
    href: "#",
  },
  {
    name: "Privacy Policy",
    href: "#",
  },
]

const socialMediaLinks = [
  { icon: <IoLogoFacebook color="#a3a325" />, href: "#" },
  { icon: <FaYoutube color="#a3a325" />, href: "#" },
  { icon: <FaLinkedin color="#a3a325" />, href: "#" },
  { icon: <FaXTwitter color="#a3a325" />, href: "#" },
  { icon: <SiGmail color="#a3a325" />, href: "#" },
];

const Footer = () => {
  return (
    <section className="bg-[#EBEBD4] pt-7 sm:pt-14 flex flex-col">
      <div className="mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3">
        <section className="flex flex-col p-6">
          <Image src={"/logo.png"} alt="logo" height={120} width={120}/>
          <Label className="text-2xl font-bold mt-2">Shardlow Speed Shop</Label>
          <div className="flex flex-row space-x-6 items-center sm:w-[80%] my-2">
            <FaMapLocationDot className="w-7 h-7"/>
            <div className="flex flex-col space-y-1">
              <Label className="text-sm font-bold">Corporate Office:</Label>
              <Label className="text-sm font-light">House #29, Road # 02, Sector # 07, Uttara, Dhaka-1230.</Label>
            </div>
          </div>
          <div className="flex flex-row space-x-6 items-center sm:w-[80%] my-2">
            <FaPhoneAlt className="w-5 h-5"/>
            <div className="flex flex-col space-y-1">
              <Label className="text-sm font-bold">Call us:</Label>
              <Link href="tel:0156484161" className="text-sm font-light">0156484161</Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-6 space-y-4">
          <Label className="text-xl font-bold">Help & Information</Label>
          <Separator className="w-[50px]"/>
          {helpAndInformationLinks.map((item,idx) => (
              <Link
                  key={idx}
                  href={item.href}
                  className="text-base w-fit font-light hover:text-custom-primary transition-all ease-in-out duration-500 tracking-wider"
              >
                {item.name}
              </Link>
          ))}
        </section>
        <section className="flex flex-col p-6 space-y-4">
          <Label className="text-xl font-bold">Stay Connected</Label>
          <Separator className="w-[50px]"/>
          <div className="flex flex-row space-x-4">
            {socialMediaLinks.map((link, idx) => (
                <Link href={link.href} key={idx}>
                  {React.cloneElement(link.icon, { size: "24", className:"hover:scale-105 transition-all ease-in-out duration-200 " })}
                </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-base font-light">Become an Shardlow insider! Join Our Email List.</Label>
            <input
                type="text"
                placeholder="Email Address"
                className="bg-gray-100 border border-[#a3a325] text-sm p-2 text-black rounded-xl w-full font-light"
            />
            <button className="w-[40%] text-base bg-transparent hover:bg-custom-primary border border-[#a3a325] mt-4 p-1 rounded-lg">
              Subscribe
            </button>
          </div>
        </section>
      </div>
      <Separator className="bg-custom-primary"/>
      <Label className="text-sm w-full py-2 text-center">© Copyright 2024 | <span><Link href="/" className="font-bold">Shardlow Speed Shop</Link></span> By <a href="https://www.mytechys.co.uk" target="_blank" rel="noreferrer" className="font-bold">Techy&apos;s</a>.</Label>
    </section>
  );
};

export default Footer;
