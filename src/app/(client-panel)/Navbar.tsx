// Global Imports
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/" },
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
        <div className="flex justify-center items-center space-x-2 sm:flex  sm:space-x-4 sm:items-center">
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
          <ul className="flex justify-center items-center space-x-8 tracking-widest">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setActiveLink(item.name)}
                className={`text-xl font-extralight hover:text-custom-primary hover:border-b-2 hover:border-custom-primary ${
                  activeLink === item.name
                    ? "text-custom-primary pb-1 border-b-2 border-custom-primary"
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
                        <AccordionTrigger className="font-extralight text-xl hover:no-underline py-0 hover:text-custom-primary">
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
              className="bg-custom-primary text-lg rounded-xl px-10 hover:bg-custom-primary hover:text-white hover:underline"
            >
              Get a Quote
            </Button>
            <Modal
              backdrop={backdrop}
              isOpen={isOpen}
              onClose={onClose}
              size="3xl"
            >
              <ModalContent className="p-10">
                {(onClose) => (
                  <>
                    <ModalHeader className="text-[16px] sm:text-[25px] text-center font-medium">
                      Give us a call at{" "}
                      <span className="text-custom-primary px-1">
                        1-800-987-6674
                      </span>
                      , or fill out the form below.
                    </ModalHeader>

                    <ModalBody>
                      <Separator />
                      <ul>
                        <li className="flex items-center py-5 text-[16px] sm:text-2xl">
                          <span className="mr-6  border px-2 rounded-full bg-custom-primary">
                            1
                          </span>
                          About You
                        </li>
                        <li className="flex items-center py-5 text-[16px] sm:text-2xl">
                          <span className="mr-6  border px-2 rounded-full bg-custom-primary">
                            2
                          </span>
                          About Your Vehicle
                        </li>{" "}
                        <li className="flex items-center py-5 text-[16px] sm:text-2xl">
                          <span className="mr-6  border px-2 rounded-full bg-custom-primary">
                            3
                          </span>
                          The Damage
                        </li>{" "}
                        <li className="flex items-center py-5 text-[16px] sm:text-2xl">
                          <span className="mr-6  border px-2 rounded-full bg-custom-primary">
                            4
                          </span>
                          Submit Request
                        </li>
                      </ul>{" "}
                      <Separator />
                    </ModalBody>
                    <ModalFooter className="flex justify-start flex-col">
                      <div>
                        <h1 className="text-[16px] sm:text-[25px]">
                          Tell Us About You
                        </h1>
                        <select
                          className="bg-[#EBEBD4] text-black w-full rounded-lg p-2 my-5"
                          defaultValue=""
                        >
                          <option disabled value="">
                            I'm a
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      </div>
                      <div>
                        <Button
                          color="danger"
                          variant="outline"
                          className=" px-8 py-2 sm:text-[18px] bg-custom-primary rounded-2xl hover:border-custom-primary hover:bg-transparent hover:text-custom-primary hover:underline tracking-wider"
                        >
                          Next
                        </Button>
                      </div>
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
