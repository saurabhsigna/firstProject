import React from "react";
import Heading from "./ContainerBoxHeading";
import { useMediaQuery } from "react-responsive";
import styles from "../../styles/containerCourseBox/BoxStyle.module.css";
export default function App() {
  let is480px = useMediaQuery({ query: "(min-width:489px)" });
  let size =
    "max-w-[433px] flex flex-col h-auto rounded-md border-2 border-black";
  let contentContainer = ` max-w-[280px] sm:max-w-[433px] ${
    is480px && "max-w-[340px]"
  } bg-black sm:pt-[24px] sm:px-[48px] w-full p-[16px]  sm:pb-[32px]`;
  return (
    <div className={`${size} relative  `}>
      <div className={`absolute top-0 left-[50%] ${styles.translateToCenter}`}>
        <div
          className={`bg-[#3dd771] block m-0 text-[12px] sm:text-[16px] tracking-[1px] font-medium  p-[8px] ${styles.roundedBorder4px}`}
        >
          MOST POPULAR
        </div>
      </div>
      <div
        className={`w-full rounded-md   text-center pt-[32px] bg-white pb-[24px]`}
      >
        <div className="block tex-center text-[28px]"> Personal Mentor</div>
      </div>
      <div className={`${contentContainer}`}>
        <div className="flex flex-col sm:gap-[16px] gap-[12px]">
          <Heading
            color="white"
            imgUri={"/course/point.svg"}
            heading={"No fee (Free Course)"}
          />
          <Heading
            color="white"
            imgUri={"/course/point.svg"}
            heading="Every Week saturday live doubt session"
          />
          <Heading
            color="white"
            imgUri={"/course/point.svg"}
            heading="Topic Wise test"
          />
          <Heading
            color="white"
            imgUri={"/course/point.svg"}
            heading="24*7 doubt clear availability"
          />
          <Heading
            color="white"
            imgUri={"/course/point.svg"}
            heading="Topic Wise Progress Report"
          />
        </div>
      </div>
    </div>
  );
}
