import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState } from "recoil";
import { CourseInfoAtom } from "../../../../atoms/CourseInfoAtom";
export default function App({ courseData, videoData }) {
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

  useEffect(() => {
    if (courseId && !courseInfoAtomValue) {
      fetchCourseContent();
    }

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

      {errorWarningInfo.href && "error hai "}
      <div>
        <img src="/img/videoIcon.svg" className="w-[10px] h-[10px] " />
      </div>
      <div className="lg:flex-row flex flex-col  gap-2">
        <div className="lg:ml-5">
          {courseData && JSON.stringify(courseData)}
          <div>hello videodata below</div>
          {videoData && JSON.stringify(videoData)}
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
              {courseInfoAtomValue?.courseContent &&
                currentVideoId &&
                courseId && (
                  <div>
                    {JSON.stringify(courseInfoAtomValue)} - abhinav bhai -{" "}
                    {JSON.stringify(currentVideoId)} -- courseCOntent ={" "}
                    {JSON.stringify(courseContent)}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const courseId = context.params.subject;
  const videoId = context.params.videoId;
  const { req } = context;
  const cookie = req.cookies.userToken;
  const headers = {
    authorization: `Bearer ${cookie}`, // Use the cookie as the authorization header value
  };
  console.log(headers.authorization);
  try {
    // Fetch the course data and video data concurrently
    const [courseResponse, videoResponse] = await Promise.all([
      axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URI + `/api/course/${courseId}`,
        {
          headers,
        }
      ),
      axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URI +
          `/api/course/${courseId}/learn/${videoId}`,
        { headers }
      ),
    ]);

    const courseData = courseResponse.data;
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
