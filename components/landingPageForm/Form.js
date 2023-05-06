import React from "react";
import YellowButton from "../Buttons/YellowButton";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import ClassOptions from "../forms/SelectOptions";
import { useRouter } from "next/router";

export default function App({ height, width }) {
  const router = useRouter();
  
  const clickHandler = () => {
    router.push("/");
  };
  return (
    <div
      style={{ height: `${height - 100}px` }}
      className={`flex  items-center justify-center lg:justify-start lg:items-end lg:ml-[1.4rem] max-w-screen `}
    >
      <div
        className={`rounded-md md:py-2  xl:mt-[4rem] 
        p-10 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw]
         border border-white bg-white backdrop-filter
          backdrop-blur-sm border-b  flex flex-col gap-[19px]
          md:py-[4rem]
           md:gap-[29px] lg:gap-[45px] items-center  bg-opacity-40 `}
      >
        <TextField
          required
          placeholder="enter your name"
          id="outlined-required"
          size="small"
          fullWidth
          label="Name"
        />

        <ClassOptions />

        <TextField
          required
          placeholder="enter your number"
          id="outlined-required"
          size="small"
          type={"number"}
          fullWidth
          label="Phone Number"
        />
        <YellowButton text={"Submit"} onClick={clickHandler} />
      </div>
    </div>
  );
}
