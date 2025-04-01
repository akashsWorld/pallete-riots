import React from "react";

const Buttton = ({
  buttonName,
  className,
  targetUrl,
  type,
}: {
  buttonName: string;
  targetUrl?: string;
  className?: string;
  type?: ButtonType;
}) => {
  const userButton =
    type === "secondary" ? (
      <a
        href={targetUrl}
        className={`p-[10px] rounded-[20px] transition-all ease-out duration-300 text-white border-2 border-white min-w-fit text-center cursor-pointer  hover:text-black hover:bg-white ${className}`}
      >
        {buttonName}
      </a>
    ) : (
      <div className="gradient-bg p-[1px] rounded-[20px]">
        <a href={targetUrl} className={`btn flex flex-col items-center justify-center font-semibold md:font-bold text-[10px] md:text-[16px] text-white  p-2 md:p-[10px] rounded-[20px] ${className}`}>
          {buttonName}
        </a>
      </div>
    );

  return userButton;
};

type ButtonType = "primary" | "secondary";
export default Buttton;
