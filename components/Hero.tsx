import React from "react";
import Buttton from "./Buttton";
import WorkStrip from "./WorkStrip";

const Hero = () => {
  return (
    <div className="relative mt-[55px] md:mt-[115px] lg:mt-[253px] xl:mt-[133px] h-fit flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center gap-5 h-fit">
        <h1 className="font-dmserif text-[30px] md:text-[60px] lg:text-[80px] text-center leading-tight max-w-[85%] md:max-w-[70%] lg:max-w-[60%] appear-animation">
          Design that <span className="gradient-bg text-bg">Speaks</span> Brands
          that <span className="gradient-bg text-bg">Shine</span>
        </h1>
        <div className="w-fit animate-bottom-up ">
          <Buttton
            buttonName="Let your brand shine..."
            className="w-fit lg:w-[235px] h-6 md:h-[71px]"
            targetUrl="#contacts"
          />
        </div>
      </div>
      <WorkStrip />
    </div>
  );
};

export default Hero;
