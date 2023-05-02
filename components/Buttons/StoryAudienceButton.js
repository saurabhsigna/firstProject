import React from "react";
import { useRecoilState } from "recoil";
import { AudienceButtonCurrentState } from "../../atoms/StoryPageAtom";
export default function App({ currentButton, audienceName }) {
  const [current, setCurrent] = useRecoilState(AudienceButtonCurrentState);
  const currentButtonHandler = (currentName) => {
    console.log("audienceName" + audienceName);
    setCurrent(currentName == current ? null : currentName);
  };
  return (
    <div
      className={`w-[92px] h-[40px] rounded-md py-[10px] px-[16px]   ${
        current == audienceName
          ? "bg-black text-white"
          : "bg-[#f6f6f6] border border-black text-black"
      } flex items-center justify-center`}
    >
      <button
        onClick={() => currentButtonHandler(audienceName)}
        className={`text-[14px]  ${
          current == audienceName ? "text-white" : "text-black"
        }`}
      >
        {audienceName}
      </button>
    </div>
  );
}
