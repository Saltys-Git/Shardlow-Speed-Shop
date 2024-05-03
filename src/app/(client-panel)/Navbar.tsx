import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Wheel Repair Services", path: "/wheel-repair-services" },
    { name: "Wheel Custom Coloring", path: "/wheel-custom-coloring" },
    { name: "Company", path: "/company" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      <div className="border-2 md:border-8 border-[#C6C71D] rounded-md md:rounded-2xl h-96 md:h-[760px] m-4 sm:m-24 relative bg-[#0e0c0b] bg-opacity-50 text-white p-0 md:px-10">
        <nav>
          <div className="flex justify-between items-center p-6 ">
            <div className="md:flex  md:space-x-4 md:items-center">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Picture of the author"
                className="hidden md:block"
              />
              <h1 className="text-2xl">Our Logo</h1>
            </div>
            {/* this is for mobile devices */}
            <div className="flex md:hidden">
              <Sheet onOpenChange={setOpen} open={open}>
                <SheetTrigger asChild>
                  <button
                    onClick={() => {
                      setOpen(true);
                      console.log(open);
                    }}
                  >
                    {/* <AlignJustify color="#C6C71D" /> */}
                    click
                  </button>
                </SheetTrigger>
                <SheetContent className="bg-[#222121]">
                  {menuItems.map((item, idx) => (
                    <Link href={item.path} className="py-2">
                      {item.name}
                    </Link>
                  ))}
                </SheetContent>
              </Sheet>
            </div>

            {/* this is for large screens */}
            <div className="hidden md:flex">
              <ul className="flex justify-center items-center space-x-8">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => setActiveLink(item.name)}
                    className={`text-xl font-extralight  ${
                      activeLink === item.name
                        ? "text-[#C6C71D] underline"
                        : "text-white"
                    }`}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
                <Button className="bg-[#C6C71D] text-lg rounded-xl px-10 font-semibold">
                  Get a Quote
                </Button>
              </ul>
            </div>
          </div>
        </nav>

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
      </div>
    </>
  );
};

export default NavbarComponent;
