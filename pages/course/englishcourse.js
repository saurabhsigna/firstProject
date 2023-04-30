import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  let is1156px = useMediaQuery("(min-width:1156px)");
  let positions = {
    fixed: `${is1156px && "fixed top-[100px]"} `,
    normal: "",
  };
  let outputPosition;
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  let scrollPosition = 280;
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= scrollPosition && !hasScrolledPast) {
        console.log("You have scrolled down 150 pixels!");
        setIsScrolled(true);
        setHasScrolledPast(true);
      } else if (window.scrollY < scrollPosition && hasScrolledPast) {
        console.log("You have scrolled up to less than 150 pixels!");
        setHasScrolledPast(false);
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast, is1156px]);

  if (isScrolled) {
    outputPosition = positions["fixed"];
  } else {
    outputPosition = positions["normal"];
  }
  return (
    <>
      <div className="h-[88px]"></div>
      <div
        className={`flex  ${
          is1156px ? "flex-row" : "flex-col-reverse"
        } items-center justify-center ${is1156px && "gap-[50px]"} gap-[39px]`}
      >
        <div className="lg:w-[700px]">
          <div
            className={`lg:text-3xl text-[1.5rem] lg:text-left text-center font-semibold`}
          >
            {" "}
            100 Days of Code: The Complete Python Pro Bootcamp for 2023
          </div>
          <div className="my-[10px] text-center lg:text-left mx-[1px] text-lg">
            Master Python by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </div>
          <div className=" ml-[15px] "> Created By : Shyam Dev</div>
        </div>
        <div className={` ${is1156px && "w-[340px] h-[340px]"} relative`}>
          <div
            className={` ${
              is1156px ? "w-[340px] h-[340px]" : "w-[90vw] h-[260px]"
            }  bg-yellow-300`}
          ></div>
          <div className={`flex flex-col ${outputPosition}  `}>
            <div
              className={` ${
                is1156px ? "w-[340px] h-[340px] " : " w-[90vw] h-[150px]"
              }   bg-red-300`}
            ></div>
            <button>Buy </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-[200vh] max-w-screen"></div>
    </>
  );
}
