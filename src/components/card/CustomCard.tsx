// Global Imports
import React from "react";

// External Library Import
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

interface CustomCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Card className="p-1 sm:p-8 sm:w-[490px] sm:h-[582px] bg-[#EBEBD4]">
        <CardHeader className="items-start">
          <h4 className="font-head tracking-wide italic text-[25px] sm:text-[42px]">
            {title}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible sm:min-w-[393px] sm:h-[185px] border flex items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageUrl}
            width={400}
          />
          <CardFooter>
            <p className="text-[12px] font-light tracking-wider sm:text-[16px] sm:py-2">
              {description}
            </p>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
