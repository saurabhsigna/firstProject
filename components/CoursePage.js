import React from "react";
import BlackBox from '../components/CourseBox/BlackBox'
import styles from '../styles/CoursePage.module.css'
import YellowButton from '../components/Buttons/YellowButton'
export default function App() {
  return (
    <div className="bg-[#ffe39a] max-w-screen h-auto overflow-hidden items-center flex flex-col">
        <div>
      <div className="h-[100px]"></div>
      <div className={`text-[32px] ${styles.headingFontFamily}` }>Ownership that gives you a choice </div>
    </div>
    <BlackBox/>
    <YellowButton/>
    </div>
  );
}
