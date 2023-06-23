import React from "react";
import { NextSeo } from "next-seo";

import Recorded from "../../components/offerings/recorded/RecordPageDetailsComponent";
export default function App() {
  return (
    <>
      <NextSeo
        title="Recorded Video Courses | Personal Mentor"
        description="Welcome to our pre-recorded math course, designed to help you strengthen your mathematical skills and build a solid foundation in this essential subject.Information about Participation ,student Engagement , Assessments and Feedback"
        openGraph={{
          title: "Recorded Video Courses | Personal Mentor",
          description:
            "Welcome to our pre-recorded math course, designed to help you strengthen your mathematical skills and build a solid foundation in this essential subject.Information about Participation ,student Engagement , Assessments and Feedback",
          url: "https://freeschooool.com",
          type: "profile",
          profile: {
            firstName: "Amar",
            lastName: "Singh",
            username: "AmarSingh",
            gender: "male",
          },
          images: [
            {
              url: "https://freeschooool.sgp1.cdn.digitaloceanspaces.com/amarsingh.jpeg",
              width: 200,
              height: 200,
              alt: "Profile Photo of Amar Singh",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Recorded />
      <div className="hidden">
        amar singh, abhinav dhangar , preet kushwaha , saurabh kumar
      </div>
    </>
  );
}
