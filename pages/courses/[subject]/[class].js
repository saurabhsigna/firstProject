import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../../../components/modal/NewModal";
import { useRouter } from "next/router";
import NextSeo from "../../../components/seo/NextSeoComponent";
import { useRecoilValue } from "recoil";
import { UserInfoAtom } from "../../../atoms/UserInfoAtom";

import AccessWarningModalComponent from "../../../components/modal/AccessWarningModal";
import CourseComponent from "../../../components/studentDashboard/CourseComponent";
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

    async function fetchData(subject, className) {
      let formData = { currentClass: `Class ${className}`, subject };
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
      fetchData(router.query.subject, router.query.class);
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
            href: "/signup/?text=notVerified",
            btnText: "Complete verification here",
          });
        }
        if (userInfo.loading && !token) {
          setAccessWarningModal(true);
          setAccessWarningModalInfo({
            heading: "You have to register/login to access the course",
            href: "/signup/?text=notVerified",
            btnText: "Go to signup/login",
          });
        }
      }
    }
  }, [currentClass, router.query, redirectToFormPage]);
  let modifiedCurrentClass = `Class ${router.query.class}`;
  return (
    <div>
      <NextSeo
        title={
          router.query.subject
            ? router.query.subject +
              " | " +
              (modifiedCurrentClass ? modifiedCurrentClass : "Class")
            : "Subject | " +
              (modifiedCurrentClass ? modifiedCurrentClass : "Class")
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

      <CourseComponent currentClass={router.query.class} data={data} />
    </div>
  );
}

export default SubjectPage;
