"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectItem } from "@nextui-org/select";
import Image from "next/image";

export default function UploadModel({ isOpen, onClose }) {
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [imagePreviewSingle, setImagePreviewSingle] = useState<string | null>(
    null
  );
  const [imagePreviewBefore, setImagePreviewBefore] = useState<string | null>(
    null
  );
  const [imagePreviewAfter, setImagePreviewAfter] = useState<string | null>(
    null
  );

  const handleImageUploadSingle = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewSingle(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploadBefore = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewBefore(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploadAfter = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewAfter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        placement={"center"}
        // onOpenChange={onOpenChange}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center font-inter">
                Upload Image
              </ModalHeader>
              <ModalBody>
                <Tabs
                  defaultValue="Single"
                  className="flex flex-col justify-center items-center min-w-full"
                >
                  <TabsList>
                    <TabsTrigger value="Single">Single</TabsTrigger>
                    <TabsTrigger value="Compare">Compare</TabsTrigger>
                  </TabsList>
                  <TabsContent value="Single" className="w-full">
                    <div className="flex flex-col justify-center items-center">
                      <div className="border border-dashed rounded-lg border-black my-5 relative w-[150px] h-[150px]">
                        {!imagePreviewSingle && (
                          <label
                            htmlFor="image-upload-before"
                            className="absolute inset-0 cursor-pointer bg-white rounded-md flex flex-col items-center justify-center"
                          >
                            <Image
                              src={"/uploadButton.png"}
                              alt={"Before"}
                              width={250}
                              height={250}
                              className="rounded-lg"
                              style={{ width: "150px", height: "150px" }}
                            />
                            <span className="text-center font-inter">
                              Click to Upload
                            </span>
                          </label>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUploadSingle}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-lg"
                          id="image-upload-before"
                        />
                        {imagePreviewSingle && (
                          <div className="">
                            <Image
                              src={imagePreviewSingle}
                              alt="Uploaded Image"
                              width={150}
                              height={150}
                              className="rounded-lg"
                              style={{ width: "150px", height: "150px" }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center w-full">
                        <Select
                          placeholder="Select an option..."
                          labelPlacement="outside"
                          className="max-w-xs"
                        >
                          <SelectItem key={1} value={"1"}>
                            1
                          </SelectItem>
                          <SelectItem key={2} value={"2"}>
                            2
                          </SelectItem>
                          <SelectItem key={3} value={"3"}>
                            3
                          </SelectItem>
                          <SelectItem key={4} value={"4"}>
                            4
                          </SelectItem>
                          <SelectItem key={5} value={"5"}>
                            5
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="pt-5 w-full">
                        <Button className="w-full bg-[#F5A524]">Upload</Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="Compare">
                    <div className="flex justify-center items-center space-x-10 w-full">
                      <div className="w-full">
                        <div>
                          <h1 className="text-center font-inter text-sm">
                            Before
                          </h1>
                        </div>
                        <div className="border border-dashed rounded-lg border-black my-5 relative w-[150px] h-[150px]">
                          {!imagePreviewBefore && (
                            <label
                              htmlFor="image-upload-before"
                              className="absolute inset-0 cursor-pointer bg-white rounded-md flex flex-col items-center justify-center"
                            >
                              <Image
                                src={"/uploadButton.png"}
                                alt={"Before"}
                                width={250}
                                height={250}
                                className="rounded-lg"
                                style={{ width: "150px", height: "150px" }}
                              />
                              <span className="text-center font-inter">
                                Click to Upload
                              </span>
                            </label>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUploadBefore}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-lg"
                            id="image-upload-before"
                          />
                          {imagePreviewBefore && (
                            <div className="">
                              <Image
                                src={imagePreviewBefore}
                                alt="Uploaded Image"
                                width={150}
                                height={150}
                                className="rounded-lg"
                                style={{ width: "150px", height: "148px" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <div>
                          <h1 className="text-center font-inter text-sm">
                            After
                          </h1>
                        </div>
                        <div className="border border-dashed rounded-lg border-black my-5 relative w-[150px] h-[150px]">
                          {!imagePreviewAfter && (
                            <label
                              htmlFor="image-upload-after"
                              className="absolute inset-0 cursor-pointer bg-white rounded-md flex flex-col items-center justify-center"
                            >
                              <Image
                                src={"/uploadButton.png"}
                                alt={"After"}
                                width={250}
                                height={250}
                                className="rounded-lg"
                                style={{ width: "150px", height: "150px" }}
                              />
                              <span className="text-center font-inter">
                                Click to Upload
                              </span>
                            </label>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUploadAfter}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-lg"
                            id="image-upload-after"
                          />
                          {imagePreviewAfter && (
                            <div className="">
                              <Image
                                src={imagePreviewAfter}
                                alt="Uploaded Image"
                                width={150}
                                height={150}
                                className="rounded-lg"
                                style={{ width: "150px", height: "148px" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Select
                        placeholder="Select an option..."
                        labelPlacement="outside"
                        className="max-w-xs"
                      >
                        <SelectItem key={1} value={"1"}>
                          1
                        </SelectItem>
                        <SelectItem key={2} value={"2"}>
                          2
                        </SelectItem>
                        <SelectItem key={3} value={"3"}>
                          3
                        </SelectItem>
                        <SelectItem key={4} value={"4"}>
                          4
                        </SelectItem>
                        <SelectItem key={5} value={"5"}>
                          5
                        </SelectItem>
                      </Select>
                    </div>
                    <div className="pt-5">
                      <Button className="w-full bg-[#F5A524] ">Upload</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
