import React from "react";
import { useMediaQuery } from "react-responsive";
import Stars from "./Stars";
export default function App({ bgColor, imgUri }) {
  const is500px = useMediaQuery({ query: "(min-width:500px)" });
  const colors = {
    blue: "bg-blue-300",
    green: "bg-green-300",
    pink: "bg-pink-400",
  };
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
      <img src={"/storyPage/student1.webp"} height={156} width={156} />
      </div>
      <div className="h-[24px]"></div>
      <div className="text-[16px] text-center leading-6">
        “Vyom is a Cuemath student. He is either coding, playing chess, or
        hosting his own YouTube channel in his free time. The Hon’ble Prime
        Minister awarded him the Pradhan Mantri Rashtriya Bal Puraskar.”
      </div>
      <div className="h-[10px]"></div>
      <div className="text-xl pl-[29px] w-full  font-medium tracking-[1px] ">
        Vyom Ahuja, Grade 7
      </div>
      <div className="border-b border border-black w-[80%]"></div>

      <div className=" text-left w-[90%]">
        {" "}
        Winner of Pradhan Mantri Rashtriya Bal Puraskar
      </div>
      <div className="h-[10px]"></div>
    </div>
  );
}
