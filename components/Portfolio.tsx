"use client";
import { use, useEffect, useState } from "react";
import React from "react";
import PortFolioCard from "./PortFolioCard";
import constants, { PortFolio } from "@/utility/constants";
import { FaLeaf } from "react-icons/fa";
const Portfolio = () => {
  const { portfolio } = constants;

  const [isHover, setIsHover] = useState(false);
  const [translate, setTranslate] = useState(0);

  const [cards, _ ] = useState<PortFolio[]>([
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
    ...portfolio,
    ...portfolio
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslate((prev) => {
        if (!isHover) {
          return prev -2;
        } else {
          return prev;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isHover]);

  useEffect(() => {
    setInterval(() => {
      setTranslate(0);
    },60000);
  }, []);

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
        style={{transform:`translateX(${translate}px)`}}
      >
        {cards.map(({ image, title, subTitle, tags, targetUrl }, index) => (
          <PortFolioCard
            className={`transition-transform ease-linear`}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => {
              setIsHover((pre) => !pre);
            }}
            key={index}
            image={image}
            title={title}
            subTitle={subTitle}
            tags={tags}
            targetUrl={targetUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
