import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/offerings/one-to-one.module.css";
export default function App({ text, link }) {
  return (
    <Link
      class="group relative inline-block h-12 w-full sm:w-48 mb-2 sm:mb-0 sm:mr-6 bg-black rounded-md"
      href={link}
    >
      <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
        <div
          class={`flex h-full w-full items-center justify-center ${styles.greenButton} border-2 border-black rounded-md`}
        >
          <span class="text-base font-black text-black">{text}</span>
        </div>
      </div>
    </Link>
  );
}
