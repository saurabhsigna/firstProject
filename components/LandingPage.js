import React from "react";
import CoursePage from '../components/CoursePage'
import StoryPage from '../components/StoryPage'
import FuncMiniCard from "../components/FunctionalityMiniCard/FunctionalityMiniCard";
import AnimatedTextCharacter from "../components/textAnimation/AnimatedTextCharacter";
export default function App() {
  return (
 <>
     <div className="absolute top-0">
      <img
        src="/img/blackLandinPage.avif"
        className=" relative z-[-5]  max-w-screen h-screen  object-cover  top-0 left-0 md:w-screen  md:h-auto"
      />
      <CoursePage/>
      <StoryPage/>
      <div className="max-w-screen h-screen">
        </div>
    </div>
      <div>
        <AnimatedTextCharacter text="animated text with framer-motion" />
        <button class="rounded-md border border-white px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:text-black hover:bg-gray-300">
          Get started
        </button>
        <FuncMiniCard
          bgColor="orange"
          heading={"HANDPICKED TEACHERS"}
          imgUri="/functionalityCard/Functionality2.svg"
        />
      </div>
      
      </>
  );
  
}
