import React, { useEffect, useRef, useState } from "react";
import CoursePage from "../components/CoursePage";
import LandingPageForm from "../components/landingPageForm/Form";
import StoryPage from "../components/StoryPage";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import styles from "../styles/landingPage.module.css";
import YellowButton from "../components/Buttons/YellowButton";
import FuncMiniCard from "../components/FunctionalityMiniCard/FunctionalityMiniCard";
import Accordian from "../components/accordian/Accordian";
import ServicePage from "../components/servicePage/Service";
import Footer from "../components/footer/Footer";
// import LandingMainPage from '../components/landingMainPage/Page'
import {
  imageWidthState,
  imageHeightState,
} from "../atoms/LandingPageImageDimensionAtom";
import AnimatedTextCharacter from "../components/textAnimation/AnimatedTextCharacter";
export default function App() {
  const [width, setWidth] = useRecoilState(imageWidthState);
  const [height, setHeight] = useRecoilState(imageHeightState);
  const imgRef = useRef(null);
  const [cookies, setCookies] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  useEffect(() => {
    if (imgRef.current && imgRef.current.naturalWidth) {
      setWidth(imgRef.current.width);
      setHeight(imgRef.current.height);
      if (cookies["currentClass"]) {
        setCurrentClass(cookies["currentClass"]);
      }

      console.log(currentClass + " cookies ");
      console.log("laundiya landan se laayeinge raat bhar shok manayenge !");
    }
  }, [width, height]);

  return (
    <>
      <div className="absolute top-0">
        <img
          src="/img/blackLandinPage.avif"
          ref={imgRef}
          className=" relative z-[-5]  max-w-screen h-screen  object-cover  top-0 left-0 md:w-screen  md:h-auto"
          alt="www.kindacode.com"
        />

        {/* <LandingMainPage/> */}
        <CoursePage />
        <ServicePage />
        <StoryPage />
        <Accordian />
        <Footer/>
      </div>
      <div>
        <div className="h-[88px]"></div>
        <div className="text-white">current class is {currentClass}</div>
        {/* <div className="hamurA">
          {width && height && (
            <p className="text-white">
              Image dimensions: {width}px x {height}px
            </p>
          )}
        </div> */}
        <div
          style={{ height: `${height}px` }}
          className="flex flex-col pt-[110px] items-center lg:items-start justify-start"
        >
          <div
            className={`text-center lg:text-left  ml-[20px] text-white text-3xl lg:text-4xl ${styles.topHeading} highlight highlight-indigo-600 highlight-variant-12`}
          >
            {" "}
            A New Different Way To
            <br />
            Improve Learning !
          </div>

          <div className="text-white ml-[20px] py-[10px] pb-[30px]  lg:w-[40vw]">
            Expert teachers chosen to match your child's specific needs and
            curriculum so they can master concepts at their own pace
          </div>
          <YellowButton text={"Start Now ."} />
        </div>
        {/* <button class="rounded-md border border-white px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:text-black hover:bg-gray-300">
          Get started
        </button>
        <FuncMiniCard
          bgColor="orange"
          heading={"HANDPICKED TEACHERS"}
          imgUri="/functionalityCard/Functionality2.svg"
        />  */}
        {/* <LandingPageForm  height={height} width={width}/> */}
      </div>
    </>
  );
}
