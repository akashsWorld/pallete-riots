import React from "react";
import cardImage from "@/public/cardImage.jpeg";
import Image, { StaticImageData } from "next/image";
import { MdArrowOutward } from "react-icons/md";

const WorkCard = ({
    image,
    title
}:{
    image:StaticImageData,
    title:string
}) => {
  return (
    <div className="h-[140px] md:h-[171px] lg:h-[271px] w-full rounded-[20px] overflow-hidden relative transition-all ease-out duration-300 hover:scale-105">
      <Image
        className="w-full h-full object-cover "
        src={image}
        height={400}
        width={400}
        alt="anIm"
      />
      <div className="h-full w-full translate-center bg-gradient-to-b from-transparent from-70% md:from-75% lg:from-80% to-black"></div>
      <div className="absolute z-10 bottom-2 lg:bottom-[18px] w-full md:w-fit md:left-[17px] h-6 flex items-center justify-center">
        <p className="uppercase text-base font-medium lg:text-2xl font-outfit lg:font-normal text-white">{title}</p>
        <MdArrowOutward className="text-white text-2xl"/>
      </div>
    </div>
  );
};

export default WorkCard;
