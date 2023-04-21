import React from "react";
import styles from '../../styles/FunctionalityCard.module.css'
const size = {
  size: " md:h-[96px] md:w-[256px] w-[94px] h-[86px] py-[4px] px-[8px] md:py-[16px] md:px-[24px] md:gap-[12px] gap-[2px]  rounded-md",
};
const imgSize = "w-[40px] h-[40px] md:w-[64px] md:h-[64px] ";
const colors = {
  orange: "bg-[#FFE9DD] hover:bg-white border-orange-500 text-black",
  skyBlue: "bg-[#ECF8FF] hover:bg-white border-skyBlue-500 text-black",
  green: "bg-[#DDFFE4] hover:bg-white border-green-500 text-black",
};

export default function App({ bgColor, imgUri, heading }) {
  let colorClasses = colors[bgColor];
  let sizeClass = size.size;
  return (
    <div
      className={`flex  items-center flex-col md:flex-row ${colorClasses} border border-white ${sizeClass}`}
    >
      {" "}
      <div className="flex md:w-auto w-full  items-start md:items-end">
          
      <img src={imgUri} className={`${imgSize}`} />
      </div>
      <div className={` md:text-left text-center  text-[12px] md:text-[22px] tracking-[1.5px] font-medium ${styles.headingFontFamily}`}>{heading}</div>
    </div>
  );
}
