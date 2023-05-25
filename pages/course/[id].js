import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../../components/modal/NewModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import NextSeo from "../../components/seo/NextSeoComponent";
import CourseComponent from "../../components/studentDashboard/CourseComponent";
function ErrorModal({ errorMsg, onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <NextSeo
        title={"Personal Mentor"}
        description={"Meet the personal mentor"}
        canonical={"https://saurabh1stproject.vercel.app"}
        imgAlt="a teacher teaching the physics in the greenboard"
        url={"https://saurabh1stproject.vercel.app"}
        imgUri={"/img/personalmentor.avif"}
      />
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-lg text-red-500">{errorMsg}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function CoursePage() {
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
  const router = useRouter();
  const [cookies] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!cookies["currentClass"]) {
      setOpen(true);
    } else {
      if (cookies["currentClass"]) {
        setCurrentClass(cookies["currentClass"]);
      }
      async function fetchData(courseID) {
        // let formData = { currentClass, subject };
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/course/${courseID}`
        );
        setData(response.data);
        if (!response.data.id == courseID) {
          setErrorMsg("Data not found.");
        }
        console.log("shut down");
      }
      if (router.query.id) {
        fetchData(router.query.id);
      }
    }
  }, [currentClass, router.query]);

  return (
    <div>
      <div>{open && <Modal open={open} setOpen={setOpen} />}</div>
      {/* <div className="h-[88px]"></div>
      <div>{data.description}</div> */}
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
            {data.name}
          </div>
          <div className="my-[10px] text-center lg:text-left mx-[1px] text-lg">
            {data.oneLineDescription}
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
    </div>
  );
}

export default CoursePage;
