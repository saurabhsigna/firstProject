import React from "react";
import { useMediaQuery } from "react-responsive";

export default function App() {
  let is480px = useMediaQuery({ query: "(min-width:489px)" });
  let size =
    "max-w-[340px] flex flex-col h-auto ";

  let imgSize = "w-[320px] h-[260px] rounded-md object-cover";
  let contentContainer = ` max-w-[280px] sm:max-w-[433px] ${
    is480px && "max-w-[340px]"
  } bg-black sm:pt-[24px] sm:px-[48px] w-full p-[16px]  sm:pb-[32px]`;

  return (
    <div className={`${size}`}>
      <img src={"/course/courseIllustration.avif"} className={`${imgSize}`} />
      <div className="text-yellow-400 mt-[10px]">ENGLISH</div>
      <div className="text-[1.4rem] mt-[3px] mb-[6px] ">
        English Speaking Course
      </div>
      <div className="flex items-center gap-[10px] mb-[15px]">
        <div className="text-gray-400">30 lessons</div>
        <div className="border-r border-gray-300 h-[17px] "></div>
        <div className="text-gray-400"> 83 Hours</div>
      </div>
      <button className="bg-[#5553eb] w-fit  rounded-full px-5 py-2">
        <img /> 
        <div className="text-lg text-white">Enroll Now</div>
      </button>
    </div>
  );
}
