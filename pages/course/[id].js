import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../../components/modal/NewModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import TeacherInfo from "../../components/avatarSelector/TeacherInfoAvatar";
import NextSeo from "../../components/seo/NextSeoComponent";
import ErrorWarningModal from "../../components/modal/ErrorWarning";
import CourseChapterAccordian from "../../components/courseAccordian/CourseChapterAccordian";
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
  const [errorModalOpen, setErrorModalOpen] = useState(false);
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
  const [errorWarningInfo, setErrorWarningInfo] = useState({
    href: "",
    btnText: "",
    heading: "",
  });
  const [data, setData] = useState({ id: null });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!cookies["currentClass"]) {
      setOpen(true);
    } else {
      if (cookies["currentClass"]) {
        setCurrentClass(cookies["currentClass"]);
      }

      async function fetchData(courseID) {
        const bearerHeader = {
          Authorization: `bearer ${cookies["userToken"]}`,
        };

        const response = await axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/course/${courseID}`,
            { headers: bearerHeader }
          )
          .then((res) => {
            console.log(res);
            setData(res?.data);
            if (res?.data.id != courseID) {
              console.log(res);
              setErrorMsg("Data not found.");
              setErrorModalOpen(true);
              setErrorWarningInfo({
                heading: "cannot load ",
                href: "/",
                btnText: "Go back",
              });
              console.log("boruto ");
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("err hai ");
            setErrorModalOpen(true);
            setErrorWarningInfo({
              heading: "cannot load ",
              href: "/",
              btnText: "Go back",
            });
          });
      }

      if (router.query.id) {
        fetchData(router.query.id);
      }
    }
  }, [currentClass, router.query]);

  return (
    <div>
      <div>{open && <Modal open={open} setOpen={setOpen} />}</div>
      <div className="h-[88px]"></div>
      {errorWarningInfo.href && (
        <ErrorWarningModal
          btnText={errorWarningInfo.btnText}
          open={errorModalOpen}
          setOpen={setErrorModalOpen}
          heading={errorWarningInfo.heading}
          href={errorWarningInfo.href}
        />
      )}
      <div
        className={`flex ${
          is1156px ? "flex-row" : "flex-col-reverse"
        } items-center justify-center ${is1156px && "gap-[50px]"} gap-[39px]`}
      >
        <div className="lg:w-[700px]">
          <h1
            className={`lg:text-3xl text-[1.5rem] lg:text-left text-center font-semibold`}
          >
            {data.name}
          </h1>
          <div className="my-[10px] text-center lg:text-left mx-[1px] text-lg">
            {data.oneLineDescription}
          </div>
          <div className="my-[10px] flex items-center gap-3 text-center lg:text-left mx-[1px] text-lg ">
            Created By :{" "}
            <TeacherInfo
              name={data.teacher?.name}
              image={data.teacher?.image}
            />
          </div>
        </div>
        <div className={`${is1156px && "w-[340px] h-[340px]"} relative`}>
          <div
            className={`${
              is1156px ? "w-[340px] h-auto" : "w-[90vw] h-auto"
            } bg-yellow-300`}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "69.25%",
              }}
            >
              <img
                src={data.thumbnail}
                className="absolute top-0 left-0 w-full  h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={`flex flex-col ${outputPosition}  `}>
            <div
              className={`${
                is1156px ? "w-[340px] h-[340px] " : " w-[90vw] h-[150px]"
              }   bg-red-300`}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[200vh] max-w-screen">
        <div
          className={`flex ${
            is1156px ? "flex-row" : "flex-col-reverse"
          } items-center justify-center ${is1156px && "gap-[50px]"} gap-[39px]`}
        >
          <div className="lg:w-[700px] w-[90%]">
            {data?.courseContent && (
              <CourseChapterAccordian courseContent={data?.courseContent} />
            )}
          </div>
           
          <div
            className={`${is1156px && "w-[340px] h-[340px] invisible"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
