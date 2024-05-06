import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const items = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
  { question: "Question 4", answer: "Answer 4" },
];

const FAQSection = () => {
  // question dropdown open or not
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };
  return (
    <section className="container py-10 text-white">
      <h1 className="text-center py-5 font-head text-[32px] sm:text-[62px] text-white">
        Frequently Asked Question
      </h1>
      <p className="sm:text-[26px] text-[12px] pb-5 text-default-300 font-light tracking-wider text-balance text-center ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen bookLorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
      </p>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full text-custom-primary"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="my-5 rounded-xl font-sans font-light"
            >
              <AccordionTrigger
                className={`border-b p-4 bg-[#EBEBD4] text-[12px] sm:text-[20px] tracking-wider ${
                  openItem === `item-${index}` ? "rounded-t-xl" : "rounded-lg"
                }`}
                onClick={() => handleToggle(`item-${index}`)}
              >
                <span className="text-black">{item.question}</span>
              </AccordionTrigger>

              <AccordionContent className="p-4 bg-[#EBEBD4] border-t-1 border-gray-600 rounded-b-xl text-black">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
