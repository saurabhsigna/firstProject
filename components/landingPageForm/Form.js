import React from "react";
import YellowButton from "../Buttons/YellowButton";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";

export default function App({ height, width }) {
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
          inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
          defaultValue="Small"
          id="outlined-required"
          size="small"
          fullWidth
          label="name"
        />

        <TextField
          required
          defaultValue="Small"
          id="outlined-required"
          size="small"
          fullWidth
          label="class"
        />

        <TextField
          required
          defaultValue="Small"
          id="outlined-required"
          size="small"
          type={"number"}
          fullWidth
          label="phone number"
        />
        <YellowButton text={"Submit"} />
      </div>
    </div>
  );
}
