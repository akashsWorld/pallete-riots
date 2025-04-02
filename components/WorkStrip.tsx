"use client";
import React, { useEffect, useState } from "react";
import constants from "@/utility/constants";
import Image from "next/image";
import star from "@/public/star.svg";
import { WorkCard } from "@/utility/constants";
const WorkStrip = () => {
  const { workCards } = constants;


  const [items, _] = useState<WorkCard[]>([
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,]);  

  const [translate, setTranslate] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setTranslate(pre=>{
        return pre-4;
      });
    }, 10);

    setInterval(() => {
      setTranslate(0);
    },40000);
  }, []);


  return (
    <div className="w-full h-[125px] md:h-[200px] lg:h-[310px] xl:h-[391px] flex flex-col justify-center items-center overflow-clip">
      <div className="w-[105vw] h-[50px] md:h-[70px] lg:h-[100px] gradient-bg -rotate-6 origin-center mt-[28px] relative ">
        <div 
        style={{transform:`translateX(${translate}px)`}}
        className="h-full w-fit strip-animation flex items-center gap-3 ease-linear transition-transform">
      
          {items.map((eachCard, index) => {
            return (
              <div
                className="w-fit flex items-center mx-[8px] gap-[8px] "
                key={index}
              >
                <h5 className="font-outfit font-semibold text-2xl md:text-4xl text-white inline-block text-center text-nowrap">
                  {eachCard.title}
                </h5>
                <Image
                  className="h-[20px] w-[20px] object-cover"
                  src={star}
                  width={100}
                  height={100}
                  alt="star"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkStrip;
