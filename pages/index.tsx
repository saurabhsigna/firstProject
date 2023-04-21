import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar'
import CoursePage from '../components/CoursePage'
import LandingPage from '../components/LandingPage'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <div>
       <LandingPage/>
  
      </div>
    </>
  );
}
