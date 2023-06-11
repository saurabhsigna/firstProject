import React from "react";
import CourseBox from "./CourseBox";
import TextAnim from "../textAnimation/AnimatedTextCharacter";
import { useCookies } from "react-cookie";
export default function App({ currentClass, data }) {
  return (
    <div>
      {/* <TextAnim color={"black"} text="Hi ABHINAV" size={"bigHeading"} /> */}
      <div className="my-[20px] ml-[10px] sm:ml-[20px] md:ml-[26px]  text-xl lg:text-2xl">
        Courses of{" "}
        <b className="highlight highlight-yellow-400 highlight-variant-13">
          {currentClass}
        </b>{" "}
        :{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((singleData, index) => (
          <div key={index} className="flex items-center justify-center">
            <CourseBox content={singleData} />
          </div>
        ))}
      </div>
    </div>
  );
}
