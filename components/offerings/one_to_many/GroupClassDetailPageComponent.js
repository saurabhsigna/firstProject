import React from "react";
import GreenButton from "../../Buttons/offerings/GreenButton";
import Faqs from "../../accordian/Accordian";
import { Manrope, Poppins } from "next/font/google";
import YellowUnderline from "../../Heading/Underline";
import DetailsTag from "../common/DetailsTag";
import styles from "../../../styles/components/offerings/single.module.css";

const manrope = Manrope({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App() {
  return (
    <div>
      <section className="relative pb-24">
        <img
          className="hidden md:block absolute top-0 right-0 w-36 sm:w-1/2 lg:w-auto lg:h-full object-contain"
          src="https://shuffle.dev/nigodo-assets/background/background-pink-right.svg"
          alt=""
        />
        <div className="flex mb-24 justify-between items-center py-6 px-10 relative"></div>

        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="lg:max-w-lg">
                <span className="text-xl md:text-2xl font-extrabold text-pink-400">
                  Free Demo Available
                </span>
                <h1
                  className={`text-[2.3rem] sm:text-[2.3rem] ${manrope.className} ${styles.headingStyle} lg:text-6xl font-extrabold font-heading mt-1 mb-6`}
                >
                  Group Live <YellowUnderline text={"Classes"} />
                </h1>
                <p
                  className={`text-xl md:text-2xl font-extrabold leading-8 mb-10 ${styles.paraStyle} ${poppins.className}`}
                >
                  We offer online group classes various advantages, including
                  the opportunity for peer learning, shared experiences, and
                  diverse perspectives
                </p>

                <div className="flex flex-wrap items-center">
                  <div className="flex mr-8 items-center">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="https://shuffle.dev/nigodo-assets/circle-icon-pink.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Individualized Feedback
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="https://shuffle.dev/nigodo-assets/circle-icon-pink.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      More Personalization
                    </span>
                  </div>
                </div>
                <div className="mt-[50px] md:mt-[40px]">
                  <h2 className={`text-2xl ${styles.demoHeading} md:mb-[20px]`}>
                    Book <b>Free</b> Live 1-1 Demo Today{" "}
                  </h2>
                  <GreenButton text={"Book Demo"} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                className={`block h-auto lg:h-[28rem] w-full xl:max-w-lg object-cover border-[3px] border-indigo-900 rounded-2xl shadow-lg ${styles.palmShadow}`}
                src="https://freeschooool.sgp1.cdn.digitaloceanspaces.com/amarsingh.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        </div>
      </section>

      <section class="py-26 bg-white">
        <div class="container px-4 mx-auto">
          <div class="max-w-4xl mx-auto">
            <div className="border-b-[3px] border-indigo-900  pb-12 mb-12 "></div>

            <DetailsTag
              heading={`Video Conferencing`}
              description={`  The class is conducted through a video conferencing platform such
              as <b>Zoom, Skype, or Google Meet. </b> The tutor and student can
              see and hear each other in real-time, creating an interactive
              learning environment.`}
            />
            <img
              class="block mb-6 w-full h-112 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2072&amp;q=80"
              alt=""
            />
            <div class="mb-10 p-4 md:p-8 border-l-[3px] border-indigo-500">
              <p class="text-2xl font-extrabold leading-2 md:leading-8 mb-4">
                We also provide so many other options like one to one classes,
                precorded courses
              </p>
              <GreenButton text={"Check More things"} />

              {/* <span class="text-xl text-gray-400 font-extrabold leading-7">
                &mdash; Amar Singh, CEO &amp; Teacher
              </span> */}
            </div>

            <DetailsTag
              heading={`Group Interaction`}
              description={` During the class, the instructor and students can 
              see and hear each other through their respective webcams and microphones. 
              Participants can interact with the instructor and fellow classmates using
               audio, video, and chat features.`}
            />
            <DetailsTag
              heading={`Q&A and Doubt Resolution`}
              description={`Students have the opportunity to ask questions and seek
               clarification from the instructor during the class. The instructor may
                address questions individually or facilitate group discussions to foster
                 peer-to-peer learning.`}
            />
            <DetailsTag
              heading={`Live Doubt Session`}
              description={` Online one-to-one classes provide an opportunity for students to
              ask questions and clarify doubts directly with the tutor. The
              tutor can address misconceptions, provide additional explanations,
              and ensure that the student has a clear understanding of the
              concepts.`}
            />
            <DetailsTag
              heading={`Participation and Engagement`}
              description={`Active student participation is encouraged during online group
               classes. Students can respond to prompts, share their ideas, and contribute
                to discussions. The instructor may use polling features or breakout rooms 
                for smaller group activities.`}
            />
            <DetailsTag
              heading={`Assessments and Feedback`}
              description={`The instructor may conduct quizzes, tests, or assignments to
               assess the students' understanding of the topic. They provide feedback and
                grades based on individual performance or group projects, ensuring students 
                receive constructive feedback for improvement.`}
            />
          </div>
        </div>
      </section>
      <div className="mb-10">
        <Faqs />
      </div>
    </div>
  );
}
