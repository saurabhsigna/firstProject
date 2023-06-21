import React, { useEffect, useState } from "react";
import CourseComponent from "./LeadCourseBox";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useCookies } from "react-cookie";
import ClassModalComponent from "../modal/LeadFormClassModal";
export default function App({ course }) {
  const is1300px = useMediaQuery({ query: "(min-width: 1300px)" });
  const [columnClass, setColumnClass] = useState("");
  const [cookie, setCookie] = useCookies(["currentClass"]);
  const [currentClass, setCurrentClass] = useState("");
  const [coursesData, setCoursesData] = useState("");
  const [classModalOpen, setClassModalOpen] = useState(false);
  let courseUri =
    "https://freeschooool.sgp1.cdn.digitaloceanspaces.com/freeschooool/leadpagecourses/6.json";
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
  useEffect(() => {
    fetchDataOfCourses();
  }, []);
  const fetchDataOfCourses = async () => {
    try {
      const response = await fetch(courseUri);
      const data = await response.json();
      setCoursesData(data);
    } catch (error) {
      console.error("Failed to fetch JSON data:", error);
    }
  };
  return (
    <>
      <div className="mt-6">
        <h1 className="text-3xl md:mb-4 text-center md:text-start md:ml-10">
          What we are{" "}
          <b className="highlight highlight-yellow-400 highlight-variant-13">
            Offering :{" "}
          </b>
        </h1>
        <div className="flex justify-center">
          <div
            className={`grid-rows-auto grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 py-6 ${columnClass}`}
          >
            {coursesData ? (
              coursesData.map((course, index) => (
                <CourseComponent
                  key={index}
                  description={course.description}
                  href={course.href}
                  img={course.img}
                  title={course.title}
                />
              ))
            ) : (
              <div> loading ...</div>
            )}
            {/* <CourseComponent />
            <CourseComponent />
            <CourseComponent /> */}
          </div>
        </div>
      </div>
    </>
  );
}
