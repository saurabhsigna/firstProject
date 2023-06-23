import React from "react";
import { NextSeo } from "next-seo";

import OneToGroup from "../../components/offerings/one_to_many/GroupClassDetailPageComponent";
export default function App() {
  return (
    <>
      <NextSeo
        title="1 to many Group Live Classes | Personal Mentor"
        description="We offer online group classes various advantages, including
                  the opportunity for peer learning, shared experiences, and
                  diverse perspectives.Information about Participation ,student Engagement , Assessments and Feedback"
        openGraph={{
          title: "1 to many Group Live Classes | Personal Mentor",
          description: `We offer online group classes various advantages, including
                  the opportunity for peer learning, shared experiences, and
                  diverse perspectives.Information about Participation ,student Engagement , Assessments and Feedback`,
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
      <OneToGroup />
      <div className="hidden">dulare doctor</div>
    </>
  );
}
