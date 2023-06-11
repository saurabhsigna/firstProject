import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import CoursePage from "../components/CoursePage";
import LandingPage from "../components/LandingPage";
const inter = Inter({ subsets: ["latin"] });
import { useEmail } from "../hooks/useEmail";
import NextSeo from "../components/seo/NextSeoComponent";
export default function Home() {
  // const email = useEmail();
  let title = "Personal Mentor: Elevate your skills with Personal Mentor";
  let description =
    "Elevate your skills with Personal Mentor, the top e-learning platform. Our courses and expert mentors propel your growth, enabling goal achievement. Experience seamless, personalized learning that caters to your needs, equipping you with tools for success. Join Personal Mentor now for a transformative educational journey.";
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="personal mentor, freeschooool, amar singh , student, topic-wise , amar singh"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={"https://saurabh1stproject.vercel.app"}
        imgAlt="a teacher teaching the physics in the greenboard"
        url={"https://saurabh1stproject.vercel.app"}
        imgUri={"/img/personalmentor.avif"}
      />
      <div>
        <LandingPage />
      </div>
    </>
  );
}
