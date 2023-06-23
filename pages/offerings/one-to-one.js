import React from "react";
import { NextSeo } from "next-seo";

import OtoComponent from "../../components/offerings/one_to_one/OtoComponent";
export default function App() {
  return (
    <div>
      <NextSeo
        title="1 to 1 Live Class | Personal Mentor"
        description="We offers online one-to-one classes several advantages, like Video Conferencing, Scheduling class, Individualized Feedback and Live Doubt Session"
        openGraph={{
          title: "1 to many Group Live Classes | Personal Mentor",
          description:
            "We offers online one-to-one classes several advantages, like Video Conferencing, Scheduling class, Individualized Feedback and Live Doubt Session",
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
      <OtoComponent />
      <div className="hidden">pal trading company aditya</div>
    </div>
  );
}
