import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarComponent = () => {
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
      <div className="border-8 border-[#C6C71D] rounded-2xl min-h-dvh m-4 sm:m-24 relative bg-[#0e0c0b] bg-opacity-50">
        <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-24 py-6 rounded-2xl">
          <div className="flex justify-center items-center">
            <div>
              <img
                src="/logo.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl text-white capitalize px-4 sm:px-10">
                Our Logo
              </h1>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-col sm:flex-row text-white text-lg font-extralight gap-4 sm:gap-10">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={
                    activeLink === item.name ? "underline text-[#C6C71D]" : ""
                  }
                  onClick={() => setActiveLink(item.name)}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button className="bg-[#C6C71D] text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-xl mt-4 sm:mt-0">
              Get A Quote
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
