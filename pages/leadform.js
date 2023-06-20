import React from "react";
import LeadFormComponent from "../components/landingPageForm/Form";
import LeadCourseComponent from "../components/landingPageForm/LeadCourseGrid";
export default function App() {
  return (
    <div>
      <div className="h-[88px]"></div>
      <div className="flex flex-col ">
        <LeadFormComponent />

        <LeadCourseComponent />
      </div>
      <div className="h-[35px] md:h-[55px]"></div>
    </div>
  );
}
