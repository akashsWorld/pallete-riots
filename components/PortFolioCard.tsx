import React from "react";
import Image, { StaticImageData } from "next/image";
import cardImage from "@/public/cardImage.jpeg";
import Buttton from "./Buttton";
import { MdArrowOutward } from "react-icons/md";

const PortFolioCard = ({
  image,
  title,
  subTitle,
  tags,
  className,
  onMouseOver,
  onDragStart,
  onDrag,
  onDragEnd,
  onMouseLeave,
  isDragging
}: {
  image: StaticImageData;
  title: string;
  subTitle: string;
  tags: string[];
  className?: string;
  onMouseOver?: () => void;
  onDragStart?:(eve:React.DragEvent)=>void
  onDrag?:(eve:React.DragEvent)=>void,
  onDragEnd?:(eve:React.DragEvent)=>void,
  onMouseLeave?: () => void;
  isDragging?:boolean

}) => {
  return (
    <div
    draggable

    onDragStart={(eve) => onDragStart && onDragStart(eve)}
    onDrag={(eve)=> onDrag && onDrag(eve)}
    onDragEnd={(eve) => onDragEnd && onDragEnd(eve)}
    onMouseOver={() => onMouseOver && onMouseOver()}
    onMouseLeave={() => onMouseLeave && onMouseLeave()}

      className={`h-[420px] md:h-[560px] lg:h-[614px] md:w-[450px] lg:w-[590px] p-[10px] md:p-[20px] lg:p-[30px] border-2 border-[#e4e4e4] rounded-[20px] flex flex-col items-center ${className} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      <div className="w-full">
        <div className="w-full h-[197px] md:h-[280px] lg:h-[397px] overflow-hidden rounded-[20px] aspect-square">
          <Image
            src={image}
            height={400}
            width={400}
            alt="anIm"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="font-outfit text-lg md:text-[22px] lg:text-2xl font-medium cursor-pointer">{subTitle}</p>
      </div>
      <div className="flex justify-between h-auto w-full ">
        <h4 className="text-[22px] md:text-3xl lg:text-[40px] font-semibold font-outfit cursor-pointer ">{title}</h4>
        <span className="rounded-full w-[30px] h-[30px]  md:w-[40px] md:h-[40px] lg:w-[64px] lg:h-[64px] bg-black flex items-center justify-center cursor-pointer">
          <MdArrowOutward className="text-white text-xl md:text-lg" />
        </span>
      </div>
      <div className="w-full flex flex-wrap flex-row gap-2 mt-[4px]">
        {tags.map((eachTag) => (
          <Buttton key={eachTag} buttonName={eachTag} />
        ))}
      </div>
    </div>
  );
};

export default PortFolioCard;
