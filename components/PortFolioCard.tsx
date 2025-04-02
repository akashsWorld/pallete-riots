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
  onMouseLeave,
  onClick,
  styles,
  targetUrl
}: {
  image: StaticImageData;
  title: string;
  subTitle: string;
  tags: string[];
  className?: string;
  styles?:{transform:string};
  targetUrl?:string
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}) => {
  return (
    <div
    style={styles}
    onMouseOver={() => onMouseOver && onMouseOver()}
    onMouseLeave={() => onMouseLeave && onMouseLeave()}
      className={`h-[420px] md:h-[560px] lg:h-[614px] md:w-[450px] lg:w-[590px] p-[10px] md:p-[20px] lg:p-[30px] border-2 border-[#e4e4e4] rounded-[20px] flex flex-col items-center ${className}`}
    >
      <div onClick={onClick} className="w-full">
        <div className="w-full h-[197px] md:h-[280px] lg:h-[397px] overflow-hidden rounded-[20px] aspect-square">
          <Image
            src={image}
            height={400}
            width={400}
            alt="anIm"
            className="object-cover w-full h-full"
          />
        </div>
        <a className="font-outfit text-lg md:text-[22px] lg:text-2xl font-medium cursor-pointer">{subTitle}</a>
      </div>
      <div className="flex justify-between h-auto w-full ">
        <a className="text-[22px] md:text-3xl lg:text-[40px] font-semibold font-outfit cursor-pointer ">{title}</a>
        <span className="rounded-full w-[30px] h-[30px]  md:w-[40px] md:h-[40px] lg:w-[64px] lg:h-[64px] bg-black flex items-center justify-center cursor-pointer">
          <a href={targetUrl}><MdArrowOutward className="text-white text-xl md:text-lg" /></a>
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
