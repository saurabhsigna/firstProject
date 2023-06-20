import React, { useEffect, useState } from "react";
import CourseComponent from "./LeadCourseBox";
import { useMediaQuery } from "react-responsive";
import { useCookies } from "react-cookie";
import ClassModalComponent from "../modal/LeadFormClassModal";
export default function App({ course }) {
  const is1300px = useMediaQuery({ query: "(min-width: 1300px)" });
  const [columnClass, setColumnClass] = useState("");
  const [cookie, setCookie] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  const [classModalOpen, setClassModalOpen] = useState(false);

  useEffect(() => {
    setColumnClass(is1300px ? "lg:grid-cols-3" : "lg:grid-cols-2");
  }, [is1300px]);

  useEffect(() => {
    setCurrentClass(cookie["currentClass"]);
  }, [cookie["currentClass"]]);

  useEffect(() => {
    if (!cookie["currentClass"]) {
      setClassModalOpen(true);
    }
  }, [currentClass]);

  return (
    <>
      {classModalOpen && (
        <ClassModalComponent
          open={classModalOpen}
          setOpen={setClassModalOpen}
        />
      )}
      <h1 className="text-3xl ml-10">Popular Course of {currentClass}</h1>
      <div className="flex justify-center">
        <div
          className={`grid-rows-auto grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 py-6 ${columnClass}`}
        >
          <CourseComponent />
          <CourseComponent />
          <CourseComponent />
        </div>
      </div>
    </>
  );
}
