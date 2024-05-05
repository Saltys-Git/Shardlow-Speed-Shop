import Image from "next/image";
import React from "react";

const CardComponent = () => {
  const list = [
    {
      title: "Sand Blasting",
      img: "/img.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
    },
    {
      title: "Sand Blasting",
      img: "/img.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
    },
    {
      title: "Sand Blasting",
      img: "/img.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
    },
    {
      title: "Sand Blasting",
      img: "/img.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
    },
  ];

  return (
    <>
      {" "}
      <div className="px-44 pt-0 sm:pt-[132px]">
        <section>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-3 px-3">
            {list.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className=" relative w-full h-48 sm:h-80">
                  <Image
                    fill={true}
                    alt={item.title}
                    className="h-[140px] rounded-lg"
                    src={item.img}
                  />
                </div>
                <div className=" text-white pt-10 pb-[105px] w-5/6 ">
                  <h2 className="text-[42px] italic  font-medium tracking-wide ">
                    {item.title}
                  </h2>
                  <p className="text-[14px] text-default-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardComponent;
