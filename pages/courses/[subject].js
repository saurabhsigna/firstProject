import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../../components/modal/NewModal";
import { useRouter } from "next/router";
import NextSeo from "../../components/seo/NextSeoComponent";
import { useRecoilValue } from "recoil";
import { UserInfoAtom } from "../../atoms/UserInfoAtom";

import AccessWarningModalComponent from "../../components/modal/AccessWarningModal";
import CourseComponent from "../../components/studentDashboard/CourseComponent";
function ErrorModal({ errorMsg, onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
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

function SubjectPage() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  const userInfo = useRecoilValue(UserInfoAtom);
  const [token, setToken] = useState("");
  const [classModalOpen, setClassModalOpen] = useState(false);
  const [accessWarningModal, setAccessWarningModal] = useState(false);
  const [accessWarningModalInfo, setAccessWarningModalInfo] = useState({
    href: "",
    btnText: "",
    heading: "",
  });
  const [redirectToFormPage, setRedirectToFormPage] = useState(false);

  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const token1 = cookies["userToken"];
    setToken(token1);
    if (!cookies["currentClass"] && !userInfo?.class) {
      setClassModalOpen(true);
    } else {
      if (!cookies["currentClass"] && userInfo?.class) {
        setCurrentClass(userInfo?.class);
        console.log(" current class is " + userInfo?.class);
        setClassModalOpen(false);
        setCookie("currentClass", userInfo?.class, {
          path: "/",
        });
      } else if (cookies["currentClass"] && !userInfo?.class) {
        setCurrentClass(cookies["currentClass"]);
      } else if (cookies["currentClass"] && userInfo?.class) {
        setCurrentClass(userInfo?.class);
        console.log(" current class is " + userInfo?.class);
      }

      console.log(userInfo);
      async function fetchData(subject) {
        let formData = { currentClass, subject };
        const response = await axios.post(
          process.env.NEXT_PUBLIC_BACKEND_URI + "/api/coursesinfo",
          formData
        );

        setData(response.data);
        if (!response.data.length > 0) {
          setErrorMsg("Data not found.");
        }

        console.log("shut down");
      }

      if (router.query.subject && currentClass && userInfo?.isVerified) {
        fetchData(router.query.subject);
      }

      if (!userInfo?.isVerified) {
        if (!userInfo?.id && !userInfo.loading) {
          setAccessWarningModal(true);
          setAccessWarningModalInfo({
            heading: "You have to register/login to access the course",
            href: "/signup/?text=notVerified",
            btnText: "Go to signup/login",
          });
        } else {
          if (!userInfo.loading) {
            setAccessWarningModal(true);
            setAccessWarningModalInfo({
              heading:
                "you have to complete the verification to access the course",
              href: "/completeinfo/?text=notVerified",
              btnText: "Complete verification here",
            });
          }

          if (userInfo.loading && !token1) {
            setAccessWarningModal(true);
            setAccessWarningModalInfo({
              heading: "You have to register/login to access the course ",
              href: "/signup/?text=notVerified",
              btnText: "Go to signup/login",
            });
          }
        }
      }
    }
  }, [
    currentClass,
    router.query,
    userInfo?.class,
    classModalOpen,
    redirectToFormPage,
  ]);

  return (
    <div>
      <NextSeo
        title={
          router.query.subject
            ? router.query.subject +
              " | " +
              (cookies["currentClass"] ? cookies["currentClass"] : "Class")
            : "Subject | " +
              (cookies["currentClass"] ? cookies["currentClass"] : "Class")
        }
        description={"Meet the personal mentor"}
        canonical={process.env.NEXT_PUBLIC_FRONTEND_URI}
        imgAlt="a teacher teaching the physics in the greenboard"
        url={process.env.NEXT_PUBLIC_FROTEND_URI}
        imgUri={
          process.env.NEXT_PUBLIC_FRONTEND_URI + "/img/personalmentor.avif"
        }
      />
      <div>
        {classModalOpen && (
          <Modal
            open={classModalOpen}
            setOpen={setClassModalOpen}
            subject={router.query.subject}
          />
        )}
        {accessWarningModalInfo?.href && (
          <AccessWarningModalComponent
            open={accessWarningModal}
            setOpen={setAccessWarningModal}
            btnText={accessWarningModalInfo.btnText}
            heading={accessWarningModalInfo.heading}
            href={accessWarningModalInfo.href}
          />
        )}
      </div>
      <div className="h-[88px]"></div>
      <div>
        {errorMsg && (
          <ErrorModal errorMsg={errorMsg} onClose={() => setErrorMsg("")} />
        )}
      </div>
      {currentClass && (
        <CourseComponent currentClass={currentClass} data={data} />
      )}{" "}
    </div>
  );
}

export default SubjectPage;
