import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState } from "recoil";
import { CourseInfoAtom } from "@atoms/CourseInfoAtom";
import SEO from "@components/seo/NextSeoComponent";
import MUIAccordianSSR from "@components/courseAccordian/MUIAccordianSSR";
import ErrorWarningModal from "@components/modal/ErrorWarning";
import DriveVideoComponent from "@components/embed/DriveVideoComponent";

export default function App({ courseData, videoData }) {
  const router = useRouter();
  const courseId = router.query.subject;
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
  const [seoTitle, setSeoTitle] = useState("Learning Page");

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

  useEffect(() => {
    if (
      !courseInfoAtomValue?.isPurchased &&
      !sectionContent?.url &&
      sectionContent?.id
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
    if (videoId) {
      setCurrentVideoId(videoId);
    }
  }, [videoId]);

  useEffect(() => {
    if (videoData?.title && courseData?.name) {
      setSeoTitle(`${videoData?.title} | ${courseData?.name}`);
    }
  }, [videoData, courseData]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (document.body.clientWidth < 450) {
        screen.orientation.lock("landscape");
      }
    });
  }, []);
  return (
    <>
      <SEO title={`${videoData?.title} | ${courseData?.name}`} />

      <div className="h-[88px]"></div>

      {errorWarningInfo.href && "error hai "}
      <div>
        <img src="/img/videoIcon.svg" className="w-[10px] h-[10px] " />
      </div>
      <div className="lg:flex-row flex flex-col  gap-2">
        <div className="lg:ml-5">
          {/* {courseData && JSON.stringify(courseData)} */}
          {/* <div>hello videodata below</div> */}
          {/* {videoData && JSON.stringify(videoData)} */}
          <DriveVideoComponent
            width={width}
            url={videoData?.url}
            isVideoChanging={videoData?.id}
            height={height}
          />
          {videoData && (
            <h2 className="py-1  sm:py-2 md:py-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {videoData.title}
            </h2>
          )}
          {sectionContent && (
            <h2 className="py-1  sm:py-2 md:py-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {sectionContent.url}
            </h2>
          )}
        </div>
        <div className="w-full bg-gray-300 h-[97vh] mx-auto mr-4  overflow-y-scroll">
          <div className="p-2">
            <h2 className="text-2xl  my-2">Course Content</h2>
            <div>
              <MUIAccordianSSR
                courseContent={courseData?.courseContent}
                courseId={courseId}
                currentVideoId={currentVideoId}
              />
            </div>
            <div>
              {/* {courseInfoAtomValue?.courseContent &&
                currentVideoId &&
                courseId && (
                  <div>
                    {JSON.stringify(courseInfoAtomValue)} - abhinav bhai -{" "}
                    {JSON.stringify(currentVideoId)} -- courseCOntent ={" "}
                    {JSON.stringify(courseContent)}
                  </div>
                )} */}
              {courseInfoAtomValue?.courseContent && (
                <div>{JSON.stringify(courseInfoAtomValue)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const cache = {};
export async function getServerSideProps(context) {
  const courseId = context.params.subject;
  const videoId = context.params.videoId;
  const { req } = context;
  const cookie = req.cookies.userToken;
  const headers = {
    Authorization: `Bearer ${cookie}`, // Use the cookie as the authorization header value
  };

  try {
    let courseData;

    // Check if the course data is already in the cache
    if (cache[courseId]) {
      console.log("cacheddddddddddddd");
      courseData = cache[courseId];
    } else {
      // Fetch the course data from the API
      const courseResponse = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URI + `/api/course/${courseId}`,
        {
          headers,
        }
      );

      courseData = courseResponse.data;

      // Store the course data in the cache
      cache[courseId] = courseData;
    }

    // Fetch the video data
    const videoResponse = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URI +
        `/api/course/${courseId}/learn/${videoId}`,
      { headers }
    );
    const videoData = videoResponse.data;

    return {
      props: {
        courseData,
        videoData,
      },
    };
  } catch (error) {
    // Handle the error case
    console.error("Error occurred while fetching data:", error.message);

    // You can return an error page or fallback data if needed
    return {
      props: {
        error: true,
      },
    };
  }
}
