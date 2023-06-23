import React from "react";
import { NextSeo } from "next-seo";
import LeadFormComponent from "../components/landingPageForm/Form";
import LeadCourseComponent from "../components/landingPageForm/LeadCourseGrid";
export default function App() {
  return (
    <>
      <NextSeo
        title="Fill the lead form for free live 1 to 1 demo class with Amar Singh  | Personal Mentor"
        description="Fill the leading form and wait for us contacting to you for demo classes , if you are satisfied after demo class then you can take subscription of our course. for more info see course details or contact us at 8368118716"
        openGraph={{
          title:
            "Fill the lead form for free live 1 to 1 demo class with Amar Singh  | Personal Mentor",
          description: `Fill the leading form and wait for us contacting to you for demo classes , if you are satisfied after demo class then you can take subscription of our course. for more info see course details or contact us at 8368118716`,
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
      <div>
        <div className="h-[88px]"></div>
        <div className="flex flex-col ">
          <LeadFormComponent />

          <LeadCourseComponent />
        </div>
        <div className="h-[35px] md:h-[55px]">
          <div className="hidden">
            abhinav , hiro, hiro uchiha , sasuke , boruto, suzume , suzume no
            tojimari, , hiro.arcaned.live
          </div>
        </div>
      </div>
    </>
  );
}
