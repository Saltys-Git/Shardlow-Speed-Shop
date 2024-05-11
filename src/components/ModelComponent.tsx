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
  selectedOption: z.string().nonempty("Please select an option"),
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
    formState: { errors },
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
      <ModalContent className="p-10">
        <>
          <ModalHeader className="text-[16px] sm:text-[25px] text-center font-medium">
            Give us a call at{" "}
            <span className="text-custom-primary px-1">1-800-987-6674</span>, or
            fill out the form below.
          </ModalHeader>

          <ModalBody>
            <Separator />
            <ul>
              {stepTitles.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center py-5 text-[16px] sm:text-2xl"
                >
                  <span className="mr-6 border px-2 rounded-full bg-custom-primary">
                    {index + 1}
                  </span>
                  {title}
                </li>
              ))}
            </ul>
            <Separator />
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
                    <option value="">I'm a</option>
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
