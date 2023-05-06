import React from "react";
import styles from "../../styles/Buttons/YellowButton.module.css";
export default function App({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` w-[270px] isolate flex items-center justify-center py-[18px] bg-[#ffba07] border border-black ${styles.roundedBorder104px} `}
    >
      <div className="text-[18px] font-medium">{text}</div>
    </button>
  );
}
