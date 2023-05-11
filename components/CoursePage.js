import React from "react";
import BlackBox from "../components/CourseBox/BlackBox";
import styles from "../styles/CoursePage.module.css";
import YellowButton from "../components/Buttons/YellowButton";
export default function App() {
  return (
    <div className="bg-[#c5c1c1] max-w-screen h-auto overflow-hidden items-center flex flex-col">
      <div>
        <div className="h-[50px] md:h-[80px] lg:h-[100px]"></div>
        <div className={`text-[32px] text-center ${styles.headingFontFamily}`}>
          Ownership that gives you a choice{" "}
        </div>
      </div>
      <div className="py-10">
        <BlackBox />
      </div>
      <div className="pb-10">
        <YellowButton text={"View More "} />
      </div>
    </div>
  );
}
