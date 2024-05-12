"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import UploadModel from "@/components/UploadModel";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-[#EAEAC7] w-full min-h-screen ">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-full text-center">
            <h1 className="font-inter font-bold text-2xl py-10">
              Upload image
            </h1>
          </div>
          <Separator />
          <div>
            <Tabs
              defaultValue="all"
              className="items-center justify-center flex flex-col"
            >
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="section 1">section 1</TabsTrigger>
                <TabsTrigger value="section 2">section 2</TabsTrigger>
                <TabsTrigger value="section 3">section 3</TabsTrigger>
                <TabsTrigger value="section 4">section 4</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className=" w-full">
                {" "}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={500}
                          height={500}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="section 2">
                {" "}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={300}
                          height={300}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>{" "}
              <TabsContent value="section 1">
                {" "}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={500}
                          height={500}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="section 3">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={500}
                          height={500}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>{" "}
              <TabsContent value="section 4">
                {" "}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={500}
                          height={500}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="section 5">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-3 container">
                  <Card className="relative p-0">
                    <Button
                      onClick={openModal}
                      className="w-full h-full relative rounded-md bg-white overflow-hidden"
                    >
                      <CardContent className="p-0 relative">
                        <Image
                          src={"/uploadButton.png"}
                          objectFit="cover"
                          alt={`picture `}
                          width={500}
                          height={500}
                          className="object-cover rounded-lg"
                        />{" "}
                        <p className="absolute bottom-0 left-0 right-0 z-10 text-xl font-semibold text-center bg-white">
                          Upload Now
                        </p>
                      </CardContent>
                    </Button>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={"/img.png"}
                        objectFit="cover"
                        alt="pic"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg  "
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0 max-h-[200px]">
                      <div className=" rounded-xl ">
                        <ReactCompareSlider
                          itemOne={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/bg.jpg"}
                                alt={"1"}
                                className=" object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 left-0 text-black p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative">
                              <ReactCompareSliderImage
                                src={"/img.png"}
                                alt={"2"}
                                className="object-fill rounded-xl max-h-[200px]"
                              />
                              <div className="absolute top-0 right-0 text-black  p-1  tracking-wider bg-custom-primary rounded-lg sm:text-sm">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>{" "}
            </Tabs>
          </div>
        </div>
      </section>
      <UploadModel isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default page;
