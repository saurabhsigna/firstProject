import React, { useEffect, useRef, useState } from "react";
import CoursePage from "../components/CoursePage";
import LandingPageForm from "../components/landingPageForm/Form";
import StoryPage from "../components/StoryPage";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import styles from "../styles/landingPage.module.css";
import YellowButton from "../components/Buttons/YellowButton";
import FuncMiniCard from "../components/FunctionalityMiniCard/FunctionalityMiniCard";
import Accordian from "../components/accordian/Accordian";
import ServicePage from "../components/servicePage/Service";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

const colors = [
  "rgba(0, 0, 0, 0)",
  //  "rgba(79, 70, 229, 1)"
  "rgba(0,0,0,1)",
];

const interval = 9000; // time in milliseconds between color changes
const duration = 3.5; // time in seconds for the color change animation

// import LandingMainPage from '../components/landingMainPage/Page'
import {
  imageWidthState,
  imageHeightState,
} from "../atoms/LandingPageImageDimensionAtom";
import AnimatedTextCharacter from "../components/textAnimation/AnimatedTextCharacter";
export default function App() {
  const router = useRouter();
  const [width, setWidth] = useRecoilState(imageWidthState);
  const [height, setHeight] = useRecoilState(imageHeightState);
  const imgRef = useRef(null);
  const [cookies, setCookies] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const sendToLeadFormClickHandler = () => {
    router.push("/leadform");
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentColorIndex]);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imgRef.current && imgRef.current.width) {
        setWidth(imgRef.current.width);
        setHeight(imgRef.current.height);
        if (cookies["currentClass"]) {
          setCurrentClass(cookies["currentClass"]);
        }
        console.log(currentClass + " cookies ");
      }
    };

    const image = imgRef.current;
    if (image && image.complete) {
      handleImageLoad();
    } else {
      image.addEventListener("load", handleImageLoad);
    }

    return () => {
      if (image) {
        image.removeEventListener("load", handleImageLoad);
      }
    };
  }, [width, height]);

  return (
    <>
      <div className="absolute top-0">
        <img
          // src="/img/blackLandinPage.avif"
          src="/landingPage/landingPageImage1.jpg"
          ref={imgRef}
          className=" relative z-[-5]  brightness-75 max-w-screen h-[100vh]  object-cover  top-0 left-0 md:w-screen  lg:h-[90vh] md:h-[70vh]"
          alt="www.kindacode.com"
        />

        {/* <LandingMainPage/> */}
        <CoursePage />
        <ServicePage />
        <StoryPage />
        <Accordian />
        <Footer />
      </div>
      <motion.div
      // style={{ backgroundColor: colors[currentColorIndex] }}
      // animate={{
      //   backgroundColor: colors[(currentColorIndex + 1) % colors.length],
      // }}
      // transition={{ duration }}
      >
        <div className="h-[88px]"></div>

        <div
          style={{ height: `${height}px` }}
          className="flex flex-col pt-[80px]  md:pt-[9px] lg:pt-[80px] items-center lg:items-start justify-start"
        >
          <div
            className={`text-center lg:text-left  ml-[20px] lg:ml-[60px] text-white text-[2.5rem] lg:text-[55px] ${styles.topHeading2} leading-[1.1em] highlight highlight-indigo-600 highlight-variant-12`}
          >
            {" "}
            Meet Your
            <br />
            Personal Mentor
          </div>

          <div
            className={`text-white ml-[20px] ${styles.topHeading2} lg:ml-[60px] py-[10px] pb-[30px]  lg:text-xl  lg:w-[40vw]`}
          >
            {`Expert teachers chosen to match your  child's specific needs and
            curriculum so they can master concepts at their own pace`}
          </div>
          <div className="ml-[20px] lg:ml-[60px]">
            <YellowButton
              text={"Enroll Now"}
              onClick={sendToLeadFormClickHandler}
            />
          </div>
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
      </motion.div>
    </>
  );
}
