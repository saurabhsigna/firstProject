import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { CourseInfoAtom } from "../../atoms/CourseInfoAtom";
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
        setSectionContent(res.data[0]);
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
      .catch((err) => {
        console.log("there is an error at fetchVideoDataByButton");
        console.log(err.message);
      });
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
          {videoData && JSON.stringify(videoData)}
          {sectionContent && (
            <h2 className="py-1  sm:py-2 md:py-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {sectionContent.title}
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
  const courseId = context.params.id;
  const videoId = context.params.videoId;
  const { req } = context;
  const cookie = req.cookies.userToken;
  const headers = {
    Authorization: `bearer ${cookie}`, // Use the cookie as the authorization header value
  };

  // Fetch the course data and video data concurrently
  const [courseResponse, videoResponse] = await Promise.all([
    axios.get(process.env.NEXT_PUBLIC_BACKEND_URI + `/api/course/${courseId}`, {
      headers,
    }),
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
}
