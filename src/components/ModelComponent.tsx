// Global imports

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface FormDataStep1 {
  selectedOption: string;
}

interface FormDataStep2 {
  textareaValue: string;
}

interface FormDataStep3 {
  damageDescription: string;
}

const Step1Schema = z.object({
  selectedOption: z.string({
    required_error: "Please select an option",
    invalid_type_error: "Name must be a string",
  }).min(1)
});

const Step2Schema = z.object({
  textareaValue: z.string().nonempty("Please provide vehicle information"),
});

const Step3Schema = z.object({
  damageDescription: z.string().nonempty("Please describe the damage"),
});

const ModalComponent: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  // steps
  const stepTitles = [
    "About You",
    "About Your Vehicle",
    "The Damage",
    "Submit Request",
  ];


  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const backdrop = "blur";
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (
    data: FormDataStep1 | FormDataStep2 | FormDataStep3
  ) => {
    if (step === 1) {
      try {
        await Step1Schema.parseAsync(data as FormDataStep1);
        handleNextStep();
      } catch (error: any) {
        console.error(error.errors);
      }
    } else if (step === 2) {
      try {
        await Step2Schema.parseAsync(data as FormDataStep2);
        handleNextStep();
      } catch (error: any) {
        console.error(error.errors);
      }
    } else if (step === 3) {
      try {
        await Step3Schema.parseAsync(data as FormDataStep3);
        // Submit form data
        console.log(data);

        reset();

        onClose();
        // Show success alert
        toast("Submited Successfully");

        // Reset to first step
        setStep(1);
      } catch (error: any) {
        console.error(error.errors);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      size="3xl"
      backdrop={backdrop}
      placement="center"
    >
      <ModalContent className="py-4 px-0 sm:py-8 sm:px-4">
        <>
          <ModalHeader className="text-[16px] sm:text-[25px] text-center font-medium flex flex-col sm:flex-row">
            Give us a call at <span className="text-custom-primary px-1">1-800-987-6674</span>, or fill out the form below.
          </ModalHeader>

          <ModalBody>
            <Separator />
            <ul className="flex flex-col sm:flex-row space-2 w-full justify-between">
              {stepTitles.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm sm:text-xl"
                >
                  <div className={`mr-2 border px-2 rounded-full ${index + 1 <= step ? "bg-custom-primary" : " bg-[#feffba]"}`}>
                    {index + 1}
                  </div>
                  {title}
                </li>
              ))}
            </ul>
            <Separator />
            {/*@ts-ignore*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div>
                  {/* Step 1  */}
                  <h1 className="text-[16px] sm:text-[25px]">
                    Tell Us About You
                  </h1>
                  <select
                    {...register("selectedOption")}
                    className="bg-[#EBEBD4] text-black w-full rounded-lg p-2 my-5"
                  >
                    <option value="">I&apos;m a</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              )}
              {step === 2 && (
                <div>
                  {/* Step 2  */}
                  <h1 className="text-[16px] sm:text-[25px]">
                    About Your Vehicle
                  </h1>
                  <textarea
                    {...register("textareaValue")}
                    className="bg-[#EBEBD4] text-black w-full rounded-lg p-2 my-5"
                    rows={5}
                    placeholder="Tell us about your vehicle..."
                  />
                </div>
              )}
              {step === 3 && (
                <div>
                  {/* Step 3  */}
                  <h1 className="text-[16px] sm:text-[25px]">The Damage</h1>
                  <textarea
                    {...register("damageDescription")}
                    className="bg-[#EBEBD4] text-black w-full rounded-lg p-2 my-5"
                    rows={5}
                    placeholder="Describe the damage..."
                  />
                </div>
              )}
              <div className="flex justify-between">
                {step !== 1 && (
                  <Button
                    color="danger"
                    variant="outline"
                    className="px-8 py-2 sm:text-[18px] bg-custom-primary rounded-2xl tracking-wider"
                    onClick={handlePrevStep}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  color="danger"
                  variant="outline"
                  className="px-8 py-2 sm:text-[18px] bg-custom-primary rounded-2xl tracking-wider"
                >
                  {step === 3 ? "Submit" : "Next"}
                </Button>
              </div>
            </form>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
