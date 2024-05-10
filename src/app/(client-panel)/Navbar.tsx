import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'


import {
  AlignJustify,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";



import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ModalComponent from "@/components/ModelComponent";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";


const NavbarComponent = () => {
  const pathname = usePathname()
  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Wheel Repair Services",
      path:"/wheel-repair-services",
      items: [
        { name: "service 1", path: "1" },
        { name: "Service 2", path: "2" },
        { name: "service 3", path: "3" },
        { name: "service 4", path: "4" },
      ],
    },
    {
      name: "Wheel Custom Coloring",
      path:"/wheel-custom-coloring",
      items: [
        { name: "service 1", path: "1" },
        { name: "Service 2", path: "2" },
        { name: "service 3", path: "3" },
        { name: "service 4", path: "4" },
      ],
    },
    { name: "Company", path: "/company" },
    { name: "Gallery", path: "/gallery" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const handleLinkClick = (name: string) => {
    setActiveLink(name);
  };

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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, idx) => (
                <NavbarItem isActive={item.path === pathname}>
                  {item.items ? (
                    <Dropdown
                      className="bg-custom-bgColor"
                      type="listbox"
                      closeOnSelect={true}
                      onOpenChange={(isOpen) => {
                        if (item.name === "Wheel Repair Services") {
                          setDropdown1Open(isOpen);
                        } else if (item.name === "Wheel Custom Coloring") {
                          setDropdown2Open(isOpen);
                        }
                      }}
                    >
                      <DropdownTrigger>
                        <div className={`hover:text-custom-primary flex justify-center items-center ${item.path === pathname && "text-custom-primary"}`}>
                          <span onClick={() => handleLinkClick(item.name)}>
                            {item.name}
                          </span>
                          {item.name === "Wheel Repair Services" ? (
                            dropdown1Open ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )
                          ) : dropdown2Open ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>
                      </DropdownTrigger>

                      <DropdownMenu>
                        {item.items.map((subItem, subIdx) => (
                          <DropdownItem
                            key={subIdx}
                            className="hover:text-black font-light text-white hover:bg-transparent"
                            title={subItem.name}
                            href={subItem.path}
                            showDivider={true}
                          />
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Link href={item.path} className={`hover:text-custom-primary ${item.path === pathname && "text-custom-primary"}`}>
                        {item.name}
                    </Link>
                  )}
                </NavbarItem>
              ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={openModal}
            className="bg-custom-primary text-lg rounded-xl px-10 hidden sm:flex"
          >
            Get a Quote
          </Button>
          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger 
              className="flex sm:hidden"
            >
              <AlignJustify color="#C6C71D" />
            </SheetTrigger>
            <SheetContent className="bg-custom-bgColor text-white">
            <ScrollShadow hideScrollBar className="w-full h-screen pb-16">
                <SheetHeader className="text-2xl py-5 text-start">
                  Shardlow Speed Shop
                </SheetHeader>
                {menuItems.map((item, idx) => (
                  <SheetTitle key={idx} className="py-3">
                    {item.items ? (
                      <>
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
                                    className="text-[#C6C71D] text-base font-light"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </AccordionContent>{" "}
                          </AccordionItem>
                        </Accordion>
                      </>
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
    {/*<nav>
      <div className="flex justify-between items-center p-6 ">
        <div className="flex justify-center items-center space-x-2 sm:flex  sm:space-x-4 sm:items-center ">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Picture of the author"
            className="hidden sm:block"
          />
          <Image
            src="/logo.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="block sm:hidden"
          />
          <h1 className="text-xl sm:text-4xl font-head ">
            Shardlow Speed Shop
          </h1>
        </div>
        {/* this is for mobile devices */}
        <div className="flex sm:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify color="#C6C71D" />
            </SheetTrigger>
            <SheetContent className="bg-custom-bgColor text-white">
              <SheetHeader className="text-2xl py-5 text-start">
                Shardlow Speed Shop
              </SheetHeader>
              {menuItems.map((item, idx) => (
                <SheetTitle key={idx} className="py-3">
                  {item.items ? (
                    <>
                      <Accordion type="single" collapsible className="">
                        <AccordionItem
                          className="text-[#C6C71D] text-sm font-light border-none"
                          value={item.name}
                        >
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            {item.items.map((subItem, subIdx) => (
                              <li key={subIdx} className="list-none py-2">
                                <Link
                                  href={subItem.path}
                                  className="text-[#C6C71D] text-sm font-light"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </AccordionContent>{" "}
                        </AccordionItem>
                      </Accordion>
                    </>
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
            </SheetContent>{" "}
          </Sheet>
        </div>

        {/* this is for large screens */}
        <div className="hidden sm:flex">
          <ul className="flex justify-center items-center space-x-8 font-thin text-xl">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  activeLink === item.name
                    ? "text-custom-primary "
                    : "text-white"
                }`}
              >
                {item.items ? (
                  <Dropdown
                    className="bg-custom-bgColor"
                    type="listbox"
                    closeOnSelect={true}
                    onOpenChange={(isOpen) => {
                      if (item.name === "Wheel Repair Services") {
                        setDropdown1Open(isOpen);
                      } else if (item.name === "Wheel Custom Coloring") {
                        setDropdown2Open(isOpen);
                      }
                    }}
                  >
                    <DropdownTrigger>
                      <div className="hover:text-custom-primary flex justify-center items-center">
                        <span onClick={() => handleLinkClick(item.name)}>
                          {item.name}
                        </span>
                        {item.name === "Wheel Repair Services" ? (
                          dropdown1Open ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )
                        ) : dropdown2Open ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>
                    </DropdownTrigger>

                    <DropdownMenu>
                      {item.items.map((subItem, subIdx) => (
                        <DropdownItem
                          key={subIdx}
                          className="hover:text-black font-light text-white hover:bg-transparent"
                          title={subItem.name}
                          href={subItem.path}
                          showDivider={true}
                        />
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <Link href={item.path}>
                    <span
                      className="hover:text-custom-primary"
                      onClick={() => handleLinkClick(item.name)}
                    >
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            <Button
              onClick={openModal}
              className="bg-custom-primary text-lg rounded-xl px-10 hover:bg-custom-primary hover:text-white hover:underline"
            >
              Get a Quote
            </Button>
          </ul>
        </div>
      </div>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </nav>*/}
  );
};

export default NavbarComponent;
