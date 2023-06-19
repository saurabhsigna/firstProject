import React, { useEffect, useState } from "react";
import CourseComponent from "./LeadCourseBox";
import { useMediaQuery } from "react-responsive";

export default function App({ course }) {
  const is1300px = useMediaQuery({ query: "(min-width: 1300px)" });
  const [columnClass, setColumnClass] = useState("");

  useEffect(() => {
    setColumnClass(is1300px ? "lg:grid-cols-3" : "lg:grid-cols-2");
  }, [is1300px]);

  return (
    <>
      <h1 className="text-3xl ml-10">Popular Course of Class 6</h1>
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
