import React from "react";
import { useMediaQuery } from "react-responsive";
import {useRouter} from 'next/router'
export default function App({ content }) {
  const router = useRouter();
  
  let is480px = useMediaQuery({ query: "(min-width:489px)" });
  let size = "max-w-[340px] flex flex-col h-auto ";

  let imgSize = "w-[320px] h-[260px] rounded-md object-cover";
  let contentContainer = ` max-w-[280px] sm:max-w-[433px] ${
    is480px && "max-w-[340px]"
  } bg-black sm:pt-[24px] sm:px-[48px] w-full p-[16px]  sm:pb-[32px]`;
   
   const clickHandler = ()=>{
     if(content?.id)
    {
      router.push(`/course/${content?.id}`)
    }
   }

  return (
    <div className={`${size}`}>
      <img src={"/course/courseIllustration.avif"} className={`${imgSize}`} />
      <div className="text-yellow-400 mt-[10px] uppercase">{content?.subject}</div>
      <div className="text-[1.4rem] mt-[3px] mb-[6px] ">{content?.name}</div>
      <div className="flex items-center gap-[10px] mb-[15px]">
        <div className="text-gray-400">30 lessons</div>
        <div className="border-r border-gray-300 h-[17px] "></div>
        <div className="text-gray-400"> 83 Hours</div>
      </div>
      <button className="bg-[#5553eb] w-fit  rounded-full px-5 py-2">
        <img />
        <button onClick={clickHandler}  className="text-lg text-white">View More</button>
      </button>
    </div>
  );
}
