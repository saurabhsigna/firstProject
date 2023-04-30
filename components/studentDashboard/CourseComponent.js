import React from "react";
import CourseBox from "./CourseBox";
import TextAnim from "../textAnimation/AnimatedTextCharacter";
export default function App() {
  return (
    <div>
      <TextAnim color={"black"} text="Hi ABHINAV" size={"bigHeading"} />
      <div className="my-[20px] text-xl lg:text-2xl">Courses of Class 8 : </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center justify-center">
          <CourseBox />
        </div>
        <div className="flex items-center justify-center">
          <CourseBox />
        </div>
        <div className="flex items-center justify-center">
          <CourseBox />
        </div>
      </div>
    </div>
  );
}
