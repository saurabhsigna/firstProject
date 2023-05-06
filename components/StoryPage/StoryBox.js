import React from "react";
import { useMediaQuery } from "react-responsive";
import Stars from "./Stars";
export default function App({
  bgColor,
  imgUri,
  description,
  name,
  occupation,
}) {
  const is500px = useMediaQuery({ query: "(min-width:500px)" });
  // const colors = {
  //   blue: "bg-blue-300",
  //   green: "bg-green-300",
  //   pink: "bg-pink-400",
  // };
  let colors = ["bg-[#ed6cef] ", "bg-[#3dd771]", "bg-[#1eb5f0]"];

  let inputColor = "";
  if (occupation === "Students") {
    inputColor = "bg-[#ed6cef]";
  } else if (occupation === "Parents") {
    inputColor = "bg-[#3dd771]";
  } else if (occupation === "Teachers") {
    inputColor = "bg-[#1eb5f0]";
  }

  const colorClass = colors[bgColor];
  return (
    <div
      className={`${
        is500px && "max-w-[56vw]"
      } max-w-[75vw] md:max-w-[320px] h-auto rounded-md flex flex-col items-center gap-[10px] ${colorClass} `}
    >
      <div className="relative">
        <div className="h-[16px]"></div>
        <Stars />
        <img
          src={imgUri}
          className="object-cover rounded-full h-[156px] w-[156px]"
          height={156}
          width={156}
        />
      </div>
      <div className="h-[24px]"></div>
      <div className="text-[16px] px-[7px] text-center leading-6">
        {description}
      </div>
      <div className="h-[10px]"></div>
      <div className="text-xl pl-[29px] w-full  font-medium tracking-[1px] ">
        {name}
      </div>
      <div className="border-b border border-black w-[80%]"></div>

      <div className=" text-left w-[90%]"> {occupation}</div>
      <div className="h-[10px]"></div>
    </div>
  );
}
