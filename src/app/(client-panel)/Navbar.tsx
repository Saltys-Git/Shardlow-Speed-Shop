import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/home" },
    {
      name: "Wheel Repair Services",
      items: [
        { name: 1, path: "1" },
        { name: 2, path: "2" },
        { name: 3, path: "3" },
        { name: 4, path: "4" },
      ],
    },
    {
      name: "Wheel Custom Coloring",
      items: [
        { name: "1", path: "1" },
        { name: 2, path: "2" },
        { name: 3, path: "3" },
        { name: 4, path: "4" },
      ],
    },
    { name: "Company", path: "/company" },
    { name: "Gallery", path: "/gallery" },
  ];

  // model toggol
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backdrop = "blur";

  const handleOpen = () => {
    onOpen();
  };

  return (
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
          <Sheet>
            <SheetTrigger>
              <AlignJustify color="#C6C71D" />
            </SheetTrigger>
            <SheetContent className="bg-[#302f2f] text-white">
              <SheetHeader className="text-xl py-5 text-start">
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
                              <li key={subIdx} className="list-none">
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
                      className="text-[#C6C71D] text-sm font-light"
                    >
                      {item.name}
                    </Link>
                  )}
                </SheetTitle>
              ))}

              <SheetFooter>
                <Button
                  onClick={handleOpen}
                  className="bg-[#C6C71D] text-lg rounded-xl px-10 font-semibold mt-5"
                >
                  Get a Quote
                </Button>
              </SheetFooter>
            </SheetContent>{" "}
          </Sheet>
        </div>

        {/* this is for large screens */}
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center space-x-8">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setActiveLink(item.name)}
                className={`text-xl font-extralight ${
                  activeLink === item.name
                    ? "text-[#C6C71D] pb-1 border-b-2 border-[#C6C71D]"
                    : "text-white"
                }`}
              >
                {item.items ? (
                  <>
                    <Accordion type="single" collapsible className="">
                      <AccordionItem
                        className="text-white   border-none"
                        value={item.name}
                      >
                        <AccordionTrigger className="font-extralight text-xl hover:no-underline py-0">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="absolute my-4">
                          {item.items.map((subItem, subIdx) => (
                            <li
                              key={subIdx}
                              className="py-3 border px-24 bg-[#181818a6] rounded-lg my-2"
                            >
                              <Link href={subItem.path} className="text-white ">
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </li>
            ))}

            <Button
              onClick={handleOpen}
              className="bg-[#C6C71D] text-lg rounded-xl px-10 font-semibold"
            >
              Get a Quote
            </Button>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="outline"
                        onClick={onClose}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
