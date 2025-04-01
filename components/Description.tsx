import Image from "next/image";
import React from "react";
import description from '@/public/description.svg'

const Description = () => {
  return (
    <div id="aboutus" className="margin-top horizpntal-margin">
      <div className="flex items-center flex-col heading">
        <h3 className="gradient-bg text-bg text-xl md:text-2xl lg:text-4xl  w-fit">
          The Palette Riots Story
        </h3>
        <h2 className="text-2xl md:text-4xl lg:text-6xl">
          Designing the Future, One Pixel at a Time
        </h2>
      </div>
      <div className="w-[90%] mx-auto flex flex-col items-center md:flex-row gap-[23px] overflow-hidden mt-[50px] h-auto">
        <div className="md:w-1/2">
          <Image
            src={description}
            height={400}
            width={400}
            alt="anIm"
            className="object-bottom w-full"
          />
        </div>
        <div className="md:w-1/2 relative px-2 h-fit md:h-full flex items-center">
          <p className="md:translate-center text-center font-outfit font-light text-xl md:text-2xl w-full">
            We are a vibrant team that deals with a riot of colors and
            intellectualism from anywhere in the world. Together we will create
            footprints of quality embeded in artistic creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
