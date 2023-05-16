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
  const email = useEmail();
  return (
    <>
      <NextSeo
        title={"Personal Mentor"}
        description={"Meet the personal mentor"}
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
