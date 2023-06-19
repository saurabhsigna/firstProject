import React from "react";
import LeadFormComponent from "../components/landingPageForm/Form";
import LeadCourseComponent from "../components/landingPageForm/LeadCourseGrid";
export default function App() {
  return (
    <div>
      <div className="h-[88px]"></div>
      <LeadCourseComponent />
      <LeadFormComponent />
    </div>
  );
}
