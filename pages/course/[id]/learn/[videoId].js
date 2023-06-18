// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import Modal from "../../../components/modal/NewModal";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useRouter } from "next/router";
// import TeacherInfo from "../../../components/avatarSelector/TeacherInfoAvatar";
// import NextSeo from "../../../components/seo/NextSeoComponent";
// import CourseComponent from "../../../components/studentDashboard/CourseComponent";
// function ErrorModal({ errorMsg, onClose }) {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
//       <NextSeo
//         title={"Personal Mentor"}
//         description={"Meet the personal mentor"}
//         canonical={"https://saurabh1stproject.vercel.app"}
//         imgAlt="a teacher teaching the physics in the greenboard"
//         url={"https://saurabh1stproject.vercel.app"}
//         imgUri={"/img/personalmentor.avif"}
//       />
//       <div className="bg-white p-4 rounded-lg shadow-lg">
//         <p className="text-lg text-red-500">{errorMsg}</p>
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// function CoursePage() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   let is1156px = useMediaQuery("(min-width:1156px)");
//   let positions = {
//     fixed: `${is1156px && "fixed top-[100px]"} `,
//     normal: "",
//   };
//   let outputPosition;
//   const [hasScrolledPast, setHasScrolledPast] = useState(false);
//   let scrollPosition = 280;
//   useEffect(() => {
//     function handleScroll() {
//       if (window.scrollY >= scrollPosition && !hasScrolledPast) {
//         console.log("You have scrolled down 150 pixels!");
//         setIsScrolled(true);
//         setHasScrolledPast(true);
//       } else if (window.scrollY < scrollPosition && hasScrolledPast) {
//         console.log("You have scrolled up to less than 150 pixels!");
//         setHasScrolledPast(false);
//         setIsScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [hasScrolledPast, is1156px]);

//   if (isScrolled) {
//     outputPosition = positions["fixed"];
//   } else {
//     outputPosition = positions["normal"];
//   }
//   const router = useRouter();
//   const [cookies] = useCookies(["currentClass"]);
//   const [currentClass, setCurrentClass] = useState("");
//   const [open, setOpen] = useState(false);

//   const [data, setData] = useState([]);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     if (!cookies["currentClass"]) {
//       setOpen(true);
//     } else {
//       if (cookies["currentClass"]) {
//         setCurrentClass(cookies["currentClass"]);
//       }
//       async function fetchData(courseID) {
//         // let formData = { currentClass, subject };
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/course/${courseID}`
//         );
//         setData(response.data);
//         console.log(response.data.teacher);
//         if (!response.data.id == courseID) {
//           setErrorMsg("Data not found.");
//         }
//         console.log("shut down");
//       }
//       if (router.query.id) {
//         fetchData(router.query.id);
//       }
//     }
//   }, [currentClass, router.query]);

//   return (
//     <div>
//       <div>{open && <Modal open={open} setOpen={setOpen} />}</div>
//       {/* <div className="h-[88px]"></div>
//       <div>{data.description}</div> */}
//       <div className="h-[88px]"></div>
//       <div
//         className={`flex  ${
//           is1156px ? "flex-row" : "flex-col-reverse"
//         } items-center justify-center ${is1156px && "gap-[50px]"} gap-[39px]`}
//       >
//         <div>
//           <LiteYouTubeEmbed
//             id="L2vS_050c-M" // Default none, id of the video or playlist
//             adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
//             params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
//             playlist={false} // Use  true when your ID be from a playlist
//             playlistCoverId="L2vS_050c-M" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
//             poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
//             title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
//             noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
//           />
//         </div>
//         <div className="lg:w-[700px]">
//           <h1
//             className={`lg:text-3xl text-[1.5rem] lg:text-left text-center font-semibold`}
//           >
//             {" "}
//             {data.name}
//           </h1>
//           <div className="my-[10px] text-center lg:text-left mx-[1px] text-lg">
//             {data.oneLineDescription}
//           </div>
//           <div className="my-[10px] text-center lg:text-left mx-[1px] text-lg ">
//             {" "}
//             Created By :{" "}
//             <TeacherInfo
//               name={data.teacher?.name}
//               image={data.teacher?.image}
//             />
//           </div>
//         </div>
//         <div className={` ${is1156px && "w-[340px] h-[340px]"} relative`}>
//           <div
//             className={` ${
//               is1156px ? "w-[340px] h-[340px]" : "w-[90vw] h-[260px]"
//             }  bg-yellow-300`}
//           ></div>
//           <div className={`flex flex-col ${outputPosition}  `}>
//             <div
//               className={` ${
//                 is1156px ? "w-[340px] h-[340px] " : " w-[90vw] h-[150px]"
//               }   bg-red-300`}
//             ></div>
//             <button>Buy </button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-black h-[200vh] max-w-screen"></div>
//     </div>
//   );
// }

// export default CoursePage;

import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { CourseInfoAtom } from "../../../../atoms/CourseInfoAtom";
import DriveVideoComponent from "../../../../components/embed/DriveVideoComponent";
import axios from "axios";
import MUIAccordian from "../../../../components/courseAccordian/MUIAccordian";
import ErrorWarningModal from "../../../../components/modal/ErrorWarning";
import CourseAccordianComponent from "../../../../components/courseAccordian/CourseChapterAccordian";
export default function App() {
  const router = useRouter();
  const courseId = router.query.id;
  const [cookie, setCookie] = useCookies();
  const token = cookie["userToken"];
  const videoId = router.query.videoId;
  const [height, setHeight] = useState("100");
  const [sectionContent, setSectionContent] = useState("");
  const [width, setWidth] = useState("100");
  const [courseInfo, setCourseInfo] = useState("");
  const [courseContent, setCourseContent] = useState("");
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorWarningInfo, setErrorWarningInfo] = useState({
    href: "",
    btnText: "",
    heading: "",
  });
  const [isCoursePurchased, setIsCoursePurchased] = useState("");
  const [courseInfoAtomValue, setCourseInfoAtomValue] =
    useRecoilState(CourseInfoAtom);

  const onButtonClicked = () => {
    setWidth("90%");
    setHeight("429");
    fetchVideoData();
  };

  let header = {
    Authorization: `Bearer ${token}`,
  };

  const fetchVideoData = async () => {
    await axios
      .get(
        process.env.NEXT_PUBLIC_BACKEND_URI +
          `/api/course/${courseId}/learn/${videoId}`,
        { headers: header }
      )
      .then((res) => {
        setSectionContent(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchCourseContent = async () => {
    await axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URI + `/api/course/${courseId}`, {
        headers: header,
      })
      .then((res) => {
        setCourseContent(res.data?.courseContent);
        setCourseInfoAtomValue(res.data);
        console.log(res.data.courseContent);
        setCourseInfo(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchVideoDataByButton = async () => {
    await axios
      .get(
        process.env.NEXT_PUBLIC_BACKEND_URI +
          `/api/course/${courseId}/learn/${videoId}`,
        { headers: header }
      )
      .then((res) => {
        console.log(res.data);
        setSectionContent(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (courseId && !courseInfoAtomValue) {
      fetchCourseContent();
    }

    if (
      !courseInfoAtomValue?.isPurchased &&
      !sectionContent?.url &&
      sectionContent.id
    ) {
      setErrorModalOpen(true);
      setErrorWarningInfo({
        heading: "phle kharido fir dekho",
        href: "/",
        btnText: "purchase",
      });
    }
  }, [courseId, videoId, courseInfoAtomValue, sectionContent]);

  useEffect(() => {
    if (courseId && videoId) {
      fetchVideoData();
      fetchVideoDataByButton();
    }
  }, [courseId, videoId]);

  useEffect(() => {
    if (videoId) {
      setCurrentVideoId(videoId);
    }
  }, [videoId]);

  return (
    <>
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
      <div>
        <img src="/img/videoIcon.svg" className="w-[10px] h-[10px] " />
      </div>
      <div className="lg:flex-row flex flex-col  gap-2">
        <div className="lg:ml-5">
          <DriveVideoComponent
            width={width}
            url={sectionContent?.url}
            isVideoChanging={videoId}
            height={height}
          />
          {sectionContent && (
            <h2 className="py-1  sm:py-2 md:py-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {sectionContent.title}
            </h2>
          )}
        </div>
        <div className="w-full bg-gray-300 h-[97vh] mx-auto mr-4  lg:overflow-y-scroll">
          <div className="p-2">
            <h2 className="text-2xl  my-2"> Course Content</h2>
            <div>
              {/* {courseContent && (
                <CourseAccordianComponent courseContent={courseContent} />
              )} */}
              {courseInfoAtomValue?.courseContent &&
                currentVideoId &&
                courseId && (
                  <MUIAccordian
                    courseContent={courseInfoAtomValue?.courseContent}
                    courseId={courseId}
                    currentVideoId={currentVideoId}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={onButtonClicked}>lcick </button> */}
    </>
  );
}
