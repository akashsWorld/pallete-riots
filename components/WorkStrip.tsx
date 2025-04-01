import React from "react";
import constants from "@/utility/constants";
import Image from "next/image";
import star from "@/public/star.svg";
const WorkStrip = () => {
  const { workCards } = constants;
  const items = [
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
    ...workCards,
  ];

  return (
    <div className="w-full h-[125px] md:h-[200px] lg:h-[310px] xl:h-[391px] flex flex-col justify-center items-center overflow-clip">
      <div className="w-[105vw] h-[50px] md:h-[70px] lg:h-[100px] gradient-bg -rotate-6 origin-center mt-[28px] relative ">
        <div className="h-full w-fit strip-animation flex items-center gap-3 translate-center">
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
