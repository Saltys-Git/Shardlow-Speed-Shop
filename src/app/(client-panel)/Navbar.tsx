// Native React imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// global im ports NextUi
import { AlignJustify } from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

// global imports shadcn
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ModalComponent from "@/components/ModelComponent";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";

const NavbarComponent = () => {
  // mobile menu nav
  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Wheel Repair Services",
      path: "/wheel-repair-services",
      items: [
        { name: "Sand Blasting", path: "/wheel-repair-services/sand-blasting" },
        {
          name: "Diamond Cutting",
          path: "/wheel-repair-services/diamond-cutting",
        },
        { name: "Crack Repair", path: "/wheel-repair-services/crack-repair" },
        { name: "Alloy Welding", path: "/wheel-repair-services/alloy-welding" },
        {
          name: "Wheel Straightening",
          path: "/wheel-repair-services/wheel-straightening",
        },
        { name: "Curve Repair", path: "/wheel-repair-services/curve-repair" },
        {
          name: "Custom or Bespoke Request",
          path: "/wheel-repair-services/custom-or-bespoke-request",
        },
      ],
    },
    {
      name: "Wheel Custom Coloring",
      path: "/wheel-custom-coloring",
      items: [
        {
          name: "Chemical Dip or Strip",
          path: "/wheel-custom-coloring/chemical-dip",
        },
        {
          name: "Powder Coating",
          path: "/wheel-custom-coloring/powder-coating",
        },
      ],
    },
    {
      name: "Company",
      path: "/company",
      items: [
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Careers", path: "/careers" },
        { name: "Reviews", path: "/reviews" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
  ];

  // large screen navlink data
  const repair = [
    { name: "Sand Blasting", path: "/wheel-repair-services/sand-blasting" },
    { name: "Diamond Cutting", path: "/wheel-repair-services/diamond-cutting" },
    { name: "Crack Repair", path: "/wheel-repair-services/crack-repair" },
    { name: "Alloy Welding", path: "/wheel-repair-services/alloy-welding" },
    {
      name: "Wheel Straightning",
      path: "/wheel-repair-services/wheel-straightning",
    },
    { name: "Curve Repair", path: "/wheel-repair-services/curve-repair" },
    {
      name: "Custom or Bespoke Request",
      path: "/wheel-repair-services/custom-or-bespoke-request",
    },
  ];

  const customColoring = [
    {
      name: "Chemical Dip or Strip",
      path: "/wheel-custom-coloring/chemical-dip",
    },
    { name: "Powder Coating", path: "/wheel-custom-coloring/powder-coating" },
  ];

  const company = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Careers", path: "/careers" },
    { name: "Reviews", path: "/reviews" },
  ];

  // active link and model toggle logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // navlink active logic
  const handleLinkClick = (name: string) => {
    setActiveLink(name);
  };
  // model togole logic
  const openModal = () => {
    setIsModalOpen(true);
    setIsSheetOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      classNames={{
        base: "bg-inherit backdrop-blur",
      }}
    >
      <NavbarBrand className="space-x-2">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <p className="font-bold text-inherit text-xl sm:text-2xl font-head">
          Shardlow Speed Shop
        </p>
      </NavbarBrand>

      {/* large screen navbar content  */}

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ul className="flex justify-center items-center space-x-5 text-lg">
          <li
            className={`hover:text-custom-primary ${
              activeLink === "Home" ? "text-custom-primary" : ""
            }`}
          >
            <Link href={"/"} onClick={() => handleLinkClick("Home")}>
              Home
            </Link>
          </li>

          <li
            className={`hover:text-custom-primary ${
              activeLink === "Wheel Repair Services"
                ? "text-custom-primary"
                : ""
            }`}
          >
            <NavigationMenu>
              <NavigationMenuItem>
                {" "}
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent ">
                  <Link
                    href="/wheel-repair-services"
                    onClick={() => handleLinkClick("Wheel Repair Service")}
                  >
                    Wheel Repair Service{" "}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="min-w-[250px] flex flex-col bg-custom-bgColor 
                text-white border-none
                  "
                >
                  {repair.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className="text-base font-head hover:text-black hover:bg-custom-primary py-2 p-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </li>
          <li
            className={`hover:text-custom-primary ${
              activeLink === "Wheel Custom Colering"
                ? "text-custom-primary"
                : ""
            }`}
          >
            <NavigationMenu>
              <NavigationMenuItem>
                {" "}
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent ">
                  <Link
                    href="/wheel-custom-coloring"
                    onClick={() => handleLinkClick("Wheel Custom Coloring")}
                  >
                    Wheel Custom Coloring{" "}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="min-w-[250px] flex flex-col bg-custom-bgColor 
                text-white border-none
                  "
                >
                  {customColoring.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className="text-base font-head hover:text-black hover:bg-custom-primary py-2 p-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </li>
          <li
            className={`hover:text-custom-primary ${
              activeLink === "Company" ? "text-custom-primary" : ""
            }`}
          >
            <NavigationMenu>
              <NavigationMenuItem>
                {" "}
                <NavigationMenuTrigger
                  className="bg-transparent hover:bg-transparent "
                  onClick={() => handleLinkClick("Company")}
                >
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="min-w-[250px] flex flex-col bg-custom-bgColor 
                text-white border-none
                  "
                >
                  {company.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className="text-base font-head hover:text-black hover:bg-custom-primary py-2 p-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </li>
          <li
            className={`hover:text-custom-primary ${
              activeLink === "Gallery" ? "text-custom-primary" : ""
            }`}
          >
            <Link href={"/gallery"} onClick={() => handleLinkClick("Gallery")}>
              Gallery
            </Link>
          </li>
        </ul>
      </NavbarContent>
      {/* mobile screen navbar content  */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={openModal}
            className="bg-custom-primary text-lg rounded-xl px-10 hidden sm:flex hover:bg-custom-primary"
          >
            Get a Quote
          </Button>
          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger className="flex sm:hidden">
              <AlignJustify color="#C6C71D" />
            </SheetTrigger>
            <SheetContent className="bg-custom-bgColor text-white max-h-full">
              <ScrollShadow hideScrollBar className="w-full h-screen pb-16">
                <SheetHeader className="text-2xl py-5 text-start">
                  Shardlow Speed Shop
                </SheetHeader>
                {menuItems.map((item, idx) => (
                  <SheetTitle key={idx} className="py-3">
                    {item.items ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          className="text-[#C6C71D] text-base font-light border-none"
                          value={item.name}
                        >
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            {item.items.map((subItem, subIdx) => (
                              <li key={subIdx} className="list-none pt-5">
                                <Link
                                  href={subItem.path}
                                  className="text-[#C6C71D] text-sm font-light"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-[#C6C71D] text-base font-light"
                      >
                        {item.name}
                      </Link>
                    )}
                  </SheetTitle>
                ))}
                <SheetFooter>
                  <Button
                    onClick={openModal}
                    className="bg-custom-primary text-lg rounded-xl px-10   mt-5"
                  >
                    Get a Quote
                  </Button>
                </SheetFooter>
              </ScrollShadow>
            </SheetContent>
          </Sheet>
        </NavbarItem>
      </NavbarContent>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </Navbar>
  );
};

export default NavbarComponent;
