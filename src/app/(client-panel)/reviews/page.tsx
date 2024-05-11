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
import Image from "next/image";

export default function UploadModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // image upload and preview

  const [imagePreviewBefore, setImagePreviewBefore] = useState<string | null>(
    null
  );
  const [imagePreviewAfter, setImagePreviewAfter] = useState<string | null>(
    null
  );

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
      <Button onPress={onOpen} className="max-w-fit">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
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
                  <TabsContent value="Single">
                    Make changes to your Single here.
                  </TabsContent>
                  <TabsContent value="Compare">
                    <div className="flex justify-center items-center space-x-10 border border-red-400 w-full">
                      <div className="w-full ">
                        <div>
                          <h1 className="text-center font-inter text-sm">
                            Before
                          </h1>
                        </div>
                        <div>
                          {!imagePreviewBefore && (
                            <label
                              htmlFor="image-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-custom-primary hover:text-custom-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-custom-primary"
                            >
                              <Image
                                src={"/uploadButton.png"}
                                alt={"Before"}
                                width={250}
                                height={250}
                                className="rounded-md"
                              />
                            </label>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUploadBefore}
                            className="hidden"
                            id="image-upload"
                          />
                          {imagePreviewBefore && (
                            <div className="mt-4">
                              <Image
                                src={imagePreviewBefore}
                                alt="Uploaded Image"
                                width={150}
                                height={150}
                                className="rounded-md"
                                style={{ width: "150px", height: "150px" }}
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
                        <div>
                          {!imagePreviewAfter && (
                            <label
                              htmlFor="image-upload"
                              className=" relative cursor-pointer bg-white rounded-md font-medium hover:text-custom-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-custom-primary border border-dashed border-black"
                            >
                              <Image
                                src={"/uploadButton.png"}
                                alt={"Before"}
                                width={250}
                                height={250}
                                className="rounded-md"
                              />{" "}
                              <h1 className="text-center font-inter">
                                Click to Upload
                              </h1>
                            </label>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUploadAfter}
                            className="hidden"
                            id="image-upload"
                          />
                          {imagePreviewAfter && (
                            <div className="mt-4">
                              <Image
                                src={imagePreviewAfter}
                                alt="Uploaded Image"
                                width={150}
                                height={150}
                                className="rounded-md"
                                style={{ width: "150px", height: "150px" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button>Upload</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
