import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function App() {
  const course_ld = {
    "@context": "http://schema.org",
    "@type": "Course",
    name: "Foundation Course of Mathematics - Class 6",
    image:
      "https://freeschooool.sgp1.cdn.digitaloceanspaces.com/amarsingh.jpeg",
    description:
      "This course is designed for students in Class 6 to develop a strong foundation in mathematics concepts and problem-solving skills.",
    provider: {
      "@type": "Organization",
      name: "Personal Mentor",
    },
    audience: {
      "@type": "Audience",
      educationalRole: "Student",
      ageRange: {
        "@type": "QuantitativeValue",
        minValue: "8",
        maxValue: "12",
      },
      audienceType: "K-12 students",
    },
    courseCode: "MATH-006",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "Mathematics - Class 6 (2023-2024)",
        startDate: "2023-09-01",
        endDate: "2024-06-30",
        instructor: {
          "@type": "Person",
          name: "Amar Singh",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "http://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(course_ld) }}
        />
      </Head> 
     <NextSeo
        title="Foundation Course of Mathematics - Class 6"
        description="Our Mathematics Course for Class 6 is designed to provide students
          with a solid foundation in mathematical concepts and problem-solving
          skills."
        openGraph={{
          url: "https://freeschooool.com/testing/course",
          title: "Foundation Course of Mathematics - Class 6",
          description: `Our Mathematics Course for Class 6 is designed to provide students
          with a solid foundation in mathematical concepts and problem-solving
          skills.`,
          images: [
            {
              url: "https://freeschooool.sgp1.cdn.digitaloceanspaces.com/amarsingh.jpeg",
              width: 200,
              height: 200,
              alt: "Image Of Course Author - Amar Singh",
              type: "image/jpeg",
            },
          ],
          siteName: "Personal Mentor",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="h-[88px]"></div>
      <div className="p-2">
        <img
          src="https://freeschooool.sgp1.cdn.digitaloceanspaces.com/amarsingh.jpeg"
          width={200}
          height={200}
          alt={"author of mathematics course"}
        />
        <h1 className="text-2xl md:text-3xl">
          Welcome to the Foundation Mathematics Course for Class 6!
        </h1>

        <p>
          Are you looking for a comprehensive and engaging mathematics course
          for Class 6 students? Look no further! Our Mathematics Course for
          Class 6 is designed to provide a solid foundation in mathematical
          concepts and foster problem-solving skills that will benefit students
          throughout their academic journey.{" "}
        </p>
        <p>
          {" "}
          Our experienced instructors have meticulously crafted a curriculum
          that covers a wide range of topics, including number systems, algebra,
          geometry, measurements, data handling, and more. With a focus on
          practical applications and real-world examples, our course ensures
          that students understand the relevance of mathematics in their daily
          lives.
        </p>
        <p>
          Our Mathematics Course for Class 6 is designed to provide students
          with a solid foundation in mathematical concepts and problem-solving
          skills. Through interactive lessons, engaging activities, and
          real-world examples, we aim to make learning mathematics an enjoyable
          and rewarding experience for students.
        </p>
        <h2 className="text-xl md:text-2xl">Course Hightlights :</h2>
        <ul>
          <li>
            Comprehensive Curriculum: Our course covers a wide range of topics,
            including number systems, algebra, geometry, measurements, data
            handling, and more.
          </li>
          <li>
            Assessments and Progress Tracking: Regular assessments and quizzes
            are conducted to evaluate students understanding and progress. We
            provide feedback and detailed reports to students and parents.
          </li>
          <li>
            Personalized Support: Our experienced instructors are dedicated to
            supporting students throughout their learning journey. They provide
            guidance, clarify doubts, and offer individualized assistance to
            ensure that each student progresses at their own pace.
          </li>
        </ul>
        <div>
          Join our Mathematics Course for Class 6 and embark on an exciting
          mathematical journey that will strengthen your problem-solving skills,
          build your confidence, and lay a solid foundation for future
          mathematical concepts.
        </div>

        <h2 className="text-xl md:text-2xl">
          Enroll now and unlock the fascinating world of mathematics!
        </h2>
      </div>
    </>
  );
}
