import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Appointment from "@/components/Appointment";
const contactUs = () => {
  const socialMediaLinks = [
    { icon: <IoLogoFacebook color="#a3a325" />, href: "#" },
    { icon: <FaYoutube color="#a3a325" />, href: "#" },
    { icon: <FaLinkedin color="#a3a325" />, href: "#" },
    { icon: <FaXTwitter color="#a3a325" />, href: "#" },
    { icon: <SiGmail color="#a3a325" />, href: "#" },
  ];

  return (
    <>
      <div className="bg-custom-bgColor min-h-screen justify-center items-center max-w-full ">
        <Hero bgSrc={"/bg.jpg"}>
          <div className="px-5 my-0 sm:my-20 w-full flex items-center justify-center text-center h-1/2 ">
            <h1 className="text-white text-[42px] sm:text-[88px] leading-snug font-heading font-head tracking-wide">
              Contact Us
            </h1>
          </div>
        </Hero>
        {/* contact section  */}
        <section className="container py-10 sm:pt-[138px] py-10sm:pb-[175px] text-center font-head text-white">
          <h1 className="text-[32px] sm:text-[62px]">Contact Details</h1>
          <p className="sm:text-[32px] font-light sm:container sm:pt-[74px] tracking-wider text-default-300">
            Need reliable car repair services? ontact us today for expert
            assistance with all your automotive needs.
          </p>
        </section>

        <section className="">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center">
            <div className=" max-w-full px-10 sm:pr-20 text-[#EBEBD4]">
              <div className="flex flex-col py-3 ">
                <div>
                  <Image
                    src={"/logo.png"}
                    height={50}
                    width={50}
                    alt="logo"
                    className="sm:w-10 rounded-lg"
                  />
                </div>
                <div className="text-[20px] sm:text-[32px] tracking-wider font-light">
                  Shardlow Speed Shop ltd
                </div>
              </div>
              <div className="text-[12px] sm:text-[18px] font-light space-y-3 max-w-full ">
                <p className="tracking-widest ">
                  62 High Street, Long Eaton, Nottigham, NG10 1LP, England
                </p>
                <p className="tracking-widest">siam@gmail.com</p>
                <p className="tracking-widest">12345697555</p>
                <div className="py-5">
                  {" "}
                  <div className="flex items-center space-x-5 sm:space-x-10">
                    {socialMediaLinks.map((link, idx) => (
                      <Link href={link.href} key={idx}>
                        {React.cloneElement(link.icon, { size: "30" })}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className=" py-10 sm:py-0">
              <Card className="w-[300px] h-[500px] sm:w-[615px] sm:h-[760px] flex flex-col justify-center p-5 sm:p-10 bg-[#EBEBD4]">
                <h1 className="sm:text-[32px] font-head font-medium ">
                  Contact US
                </h1>{" "}
                <h1 className="sm:text-[32px] font-head font-medium">
                  We'd love to hear from you!
                </h1>
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="my-3 sm:my-8 rounded-xl  tracking-wide text-[12px]"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="my-3 sm:my-8 rounded-xl  tracking-wide sm:text-[12px]"
                  />
                  <Input
                    type="email"
                    placeholder="Contact Email"
                    className="my-3 sm:my-8 rounded-xl tracking-wide  text-[12px]"
                  />
                  <p className="p-2 text-gray-600   tracking-wider text-[12px] sm:text-[15px]">
                    We'll never share your email with anyone else
                  </p>
                  <Separator className="bg-gray-700" />
                  <Textarea
                    placeholder="Message"
                    className="my-3 sm:my-8 rounded-xl justify-start  tracking-wide text-[12px] sm:h-[145px] "
                  />
                  <Button className="w-full bg-custom-primary hover:bg-transparent hover:text-gray-700 text-[18px] tracking-widest ">
                    Sent Message
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* appointment  */}
        <Appointment />
      </div>
    </>
  );
};

export default contactUs;
