import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import card from '@/app/Styles/Card.module.css'

const CustomCard = ({ image, text }) => {
  return (
    <>
    <div className="m-2">
    <Card
      isFooterBlurred
      radius="lg"
      className="shadow-sm bg-black rounded-4"
      style={{ height: "200px" }}
    >
      <Image
        alt={text || "Card image"}
        className="object-cover"
        height={200}
        src={image}
        width={360}
      />
      <CardFooter className="justify-between border-top py-1">
        <p className="text-tiny">{text || "Card Content"}</p>
        <Button
          className="text-tiny"
          variant="flat"
          color="primary"
          radius="lg"
          size="sm"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  );
};

export default CustomCard;
