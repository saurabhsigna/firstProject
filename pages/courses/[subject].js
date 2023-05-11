import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../../components/modal/NewModal";
import { useRouter } from "next/router";
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
      async function fetchData(subject) {
        let formData = { currentClass, subject };
        const response = await axios.post(
          "https://usr6by-1337.csb.app/api/coursesinfo",
          formData
        );
        setData(response.data);
        if (!response.data.length > 0) {
          setErrorMsg("Data not found.");
        }
        console.log("shut down");
      }
      if (router.query.subject && currentClass) {
        fetchData(router.query.subject);
      }
    }
  }, [currentClass, router.query]);

  return (
    <div>
      <div>
        {open && (
          <Modal open={open} setOpen={setOpen} subject={router.query.subject} />
        )}
      </div>
      <div className="h-[88px]"></div>
      <div>
        {errorMsg && (
          <ErrorModal errorMsg={errorMsg} onClose={() => setErrorMsg("")} />
        )}
      </div>
      {data && <CourseComponent currentClass={currentClass} data={data} />}{" "}
    </div>
  );
}

export default SubjectPage;
