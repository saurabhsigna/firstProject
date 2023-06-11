import React from "react";
import { BreadcrumbJsonLd, NextSeo } from "next-seo";
import Head from "next/head";
import AboutPage from "../components/aboutUs/AboutPage.js";
export default function App() {
  let title = "About Us | Personal Mentor ~ Budget-Friendly E-Learning";
  let description =
    "Experience Personal Mentor: your budget-friendly e learning companion.";
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        canonical={process.env.NEXT_PUBLIC_FRONTEND_URI + "/about"}
        openGraph={{
          url: process.env.NEXT_PUBLIC_FRONTEND_URI + "/about",
          title: title,
          description: description,
          images: [
            {
              url: "/about1.jpg",
              width: 800,
              height: 600,
              alt: "About Us Image By Personal Mentor",
              type: "image/jpg",
            },

            { url: "/about2.jpg" },
          ],
          siteName: "Personal Mentor",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Maths",
            item: "/courses/math",
          },
          {
            position: 2,
            name: "Chemistry",
            item: "/courses/chemistry",
          },
          {
            position: 3,
            name: "Hindi",
            item: "/courses/hindi",
          },
          {
            position: 4,
            name: "English",
            item: "/courses/english",
          },
        ]}
      />
      <Head>
        <meta
          name="keywords"
          content="personal mentor, freeschooool, amar singh , student, established , vision,2022"
        />
      </Head>
      <AboutPage />
    </div>
  );
}
