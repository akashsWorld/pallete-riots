"use client";
import { useEffect, useState } from "react";
import React from "react";
import PortFolioCard from "./PortFolioCard";
import constants, { PortFolio } from "@/utility/constants";
import { FaLeaf } from "react-icons/fa";
const Portfolio = () => {
  const { portfolio } = constants;

  const [isHover, setIsHover] = useState(false);

  const [translate, setTranslate] = useState(0);

  const [dragStart, setDragStart] = useState(0);

  const [previousDragging, setPreviousDragging] = useState(0);  

  const [isDragging, setIsDragging] = useState(false);

  const [translateFinal, setTranslateFinal] = useState(0);

  const cards = [
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
  ];

  const onDragStart = (eve: React.DragEvent) => {
    setTranslateFinal(translate);
    setDragStart(eve.clientX);
  };

  const onDrag = (eve: React.DragEvent) => {
    const draging = eve.clientX - dragStart;
    setTranslate(draging + translateFinal);
  };

  const onDragEnd = (eve: React.DragEvent) => {
    setIsDragging(false);
    setTranslateFinal(translate);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setTranslate((prev) => {
        if (!isHover) {
          return prev - 1;
        } else {
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <div
      id="portfolio"
      className="w-full h-fit relative mt-[30px] md:mt-[80px] lg:mt-[174px] overflow-hidden"
    >
      <div className="heading">
        <h2 className="font-outfit font-medium">
          Designs That Speak for Themselves
        </h2>
        <h2 className="font-outfit font-medium ">
          <span className="gradient-bg text-bg">Our works</span>
        </h2>
      </div>
      <div
        className={`w-fit h-auto mt-[30px] md:mt-[70px] lg:mt-[100px] flex items-center gap-5 transition-transform ease-linear`}
        style={{ transform: `translateX(${translate}px)` }}
      >
        {cards.map((eachPortFolio, index) => (
          <PortFolioCard
          className="transition-transform ease-out"
            onMouseOver={() => setIsHover(true)}
            key={index}
            image={eachPortFolio.image}
            title={eachPortFolio.title +` ${index}`}
            subTitle={eachPortFolio.subTitle}
            tags={eachPortFolio.tags}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onMouseLeave={() => setIsHover(false)}
            isDragging={isDragging}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
