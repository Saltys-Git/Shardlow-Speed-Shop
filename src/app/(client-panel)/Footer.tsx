import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const wheelRepair = [
  "Sand Blasting",
  "Dimond Cutting",
  "Crack Repair",
  "Alloy Welding",
  "Wheel Straightening",
  "Curve Repair",
  "Custom or Bespoke Request",
];

const cleanedLinks = [
  "Career",
  "Terms & Conditions",
  "Privacy Policy",
  "Company",
  "Gallery",
];

const socialMediaLinks = [
  { icon: <IoLogoFacebook color="#a3a325" />, href: "#" },
  { icon: <FaYoutube color="#a3a325" />, href: "#" },
  { icon: <FaLinkedin color="#a3a325" />, href: "#" },
  { icon: <FaXTwitter color="#a3a325" />, href: "#" },
  { icon: <SiGmail color="#a3a325" />, href: "#" },
];

const Footer = () => {
  return (
    <section className="bg-white sm:bg-[#EBEBD4] py-14">
      <div className="container">
        <div className="flex py-3 space-x-3 items-center">
          <div>
            <Image
              src={"/logo.png"}
              height={25}
              width={25}
              alt="logo"
              className="sm:w-10 rounded-lg"
            />
          </div>
          <div className="text-[28px] sm:text-[50px] ">Shardlow Speed Shop</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-start sm:space-x-10">
          <div className="flex justify-around items-start  w-full h-full">
            <div>
              <h1 className="py-2 text-[20px] sm:text-[32px] text-custom-primary text-nowrap">
                Wheel Repair Service
              </h1>
              <ul>
                {wheelRepair.map((item, idx) => (
                  <li key="{idx}" className="text-[13px] sm:text-[18px] py-2">
                    • {item}
                  </li>
                ))}
              </ul>
              <h1 className="py-2 text-[20px] sm:text-[32px] text-custom-primary text-nowrap">
                Wheel Custom Coloring
              </h1>
              <p className="text-[13px] sm:text-[18px] py-1 ">
                • Custom Dip Or Strip
              </p>
            </div>
            <div className="  pl-2">
              <ul>
                {cleanedLinks.map((item, idx) => (
                  <li key={idx} className="text-[17px] sm:text-[25px] py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="block sm:hidden ">
                <p className="text-[13px] sm:text-[20px] py-2">
                  Become an AWRS insider! Join Our Email List.
                </p>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-gray-100 text-[13px] sm:text-[18px] p-1 text-black rounded-2xl w-[150px] sm:w-[486px] sm:h-[40px] "
                />
                <button className="text-[13px] sm:text-[20px] bg-transparent border border-[#a3a325] my-2 px-1 sm:px-2 mt-4 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full flex sm:flex-col justify-center items-start">
            <div className="sm:py-5">
              <h1 className="py-2 text-[22px] sm:text-[32px]">
                Connect With Us
              </h1>
              <div className="flex items-center space-x-5 sm:space-x-10">
                {socialMediaLinks.map((link, idx) => (
                  <Link href={link.href} key={idx}>
                    {React.cloneElement(link.icon, { size: "30" })}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-[13px] sm:text-[20px] py-2">
                Become an AWRS insider! Join Our Email List.
              </p>
              <input
                type="text"
                placeholder="Email Address"
                className="bg-gray-100 text-[13px] sm:text-[18px] p-1 text-black rounded-2xl w-[150px] sm:w-[486px] sm:h-[40px] "
              />
              <button className="text-[13px] sm:text-[20px] bg-transparent border border-[#a3a325] my-2 px-1 sm:px-2 mt-4 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
