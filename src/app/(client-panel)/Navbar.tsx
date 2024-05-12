// Native React imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

// global imports NextUi
import {AlignJustify, ChevronDownIcon} from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

// global imports shadcn
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const NavbarComponent = () => {
  const pathname = usePathname()
  // mobile menu nav
  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Wheel Repair Services",
      path: "/wheel-repair-services",
      items: [
        { name: "Sand Blasting", 
          path: "/wheel-repair-services/sand-blasting" 
        },
        {
          name: "Diamond Cutting",
          path: "/wheel-repair-services/diamond-cutting",
        },
        { name: "Crack Repair", 
          path: "/wheel-repair-services/crack-repair" 
        },
        { name: "Alloy Welding", 
          path: "/wheel-repair-services/alloy-welding" 
        },
        {
          name: "Wheel Straightening",
          path: "/wheel-repair-services/wheel-straightening",
        },
        { name: "Curve Repair", 
          path: "/wheel-repair-services/curve-repair" 
        },
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
      name: "Our Company",
      items: [
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Careers", path: "/careers" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
  ];


  // active link and model toggle logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);


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
        <p className="font-bold text-inherit text-xl sm:text-2xl font-head">Shardlow Speed Shop</p>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-8">
        {/* large screen navbar content  */}
        {menuItems.map((item, idx) => {
          const hasActiveIndex = item.items? item.items.some((value) => value.path === pathname) : false
          return(
              <NavbarItem className="hidden sm:flex" key={idx} isActive={item.path === pathname || hasActiveIndex}>
                {item.items ? (
                    <HoverCard openDelay={50} closeDelay={200}>
                        <HoverCardTrigger className={`bg-transparent hover:bg-transparent flex flex-row space-2 items-center group ${(item.path === pathname ||hasActiveIndex) && "text-custom-primary"}`}>
                          {item.path ?
                              <Link
                                  href={item.path}
                              >
                                {item.name}
                              </Link>
                              :
                              <p className="cursor-pointer">
                                {item.name}
                              </p>
                          }
                          <ChevronDownIcon
                              className={`w-4 h-4 ml-2 transition duration-200 group-data-[state=open]:rotate-180 ${(item.path === pathname ||hasActiveIndex) && "text-custom-primary"}`}
                              aria-hidden="true"
                          />
                        </HoverCardTrigger>
                        <HoverCardContent
                            className="w-[--radix-hover-card-trigger-width] p-0 flex flex-col bg-custom-bgColor text-white border-none"
                        >
                          {item.items.map((item, idx) => (
                              <Link
                                  key={idx}
                                  href={item.path}
                                  className="w-full text-base text-center font-head hover:text-black hover:bg-custom-primary py-2"
                              >
                                {item.name}
                              </Link>
                          ))}
                        </HoverCardContent>
                    </HoverCard>
                ) : (
                    <Link href={item.path} className={`hover:text-custom-primary ${item.path === pathname && "text-custom-primary"}`}>
                      {item.name}
                    </Link>
                )}
              </NavbarItem>
          )})}
        <NavbarItem>
          <Button
            onClick={openModal}
            variant={"outline"}
            className="bg-transparent border-custom-primary my-8 hover:bg-custom-primary hover:text-black text-lg rounded-xl px-6 hidden sm:flex ml-4"
          >
            Get a Quote
          </Button>

          {/* mobile screen navbar content  */}
          <Sheet
              onOpenChange={setIsSheetOpen}
              open={isSheetOpen}
          >
            <SheetTrigger className="flex sm:hidden">
              <AlignJustify color="#C6C71D" />
            </SheetTrigger>
            <SheetContent className="bg-custom-bgColor text-white max-h-full">
              <ScrollShadow hideScrollBar className="w-full h-screen pb-16">
                <SheetHeader className="text-2xl py-5 text-start">
                  Shardlow Speed Shop
                </SheetHeader>
                <Accordion type="single" collapsible>
                {menuItems.map((item, idx) => (
                  <SheetTitle key={idx} className="py-3">
                    {item.items ? (
                        <AccordionItem
                          className="text-[#C6C71D] text-base font-light border-none"
                          value={item.name}
                        >
                          <AccordionTrigger>
                            {item.path ?
                                <Link
                                    href={item.path}
                                >
                                  {item.name}
                                </Link>
                                :
                                <p className="cursor-pointer">
                                  {item.name}
                                </p>
                            }
                          </AccordionTrigger>
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
                </Accordion>
                <SheetFooter>
                  <Button
                    onClick={openModal}
                    variant={"outline"}
                    className="bg-transparent border-custom-primary px-10 mt-5 mb-8 hover:bg-custom-primary hover:text-black text-lg rounded-xl"
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
