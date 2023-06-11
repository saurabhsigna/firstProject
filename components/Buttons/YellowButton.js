import React from "react";
import styles from "../../styles/Buttons/YellowButton.module.css";
export default function App({ text, onClick, type, disabled }) {
  const color = {
    disabled: "bg-[] bg-[#ffba07]",
  };
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={` w-[270px] isolate  transition-all ease-linear duration-200  flex items-center justify-center py-[18px]  ${
        disabled ? "bg-[#ffde89]" : "bg-[#ffba07]"
      } border border-black rounded-[104px]  hover:rounded-[10px]`}
    >
      <div className="text-[18px] font-medium">{text}</div>
    </button>
  );
}
