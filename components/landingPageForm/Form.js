import React, { useState, useEffect } from "react";
import YellowButton from "../Buttons/YellowButton";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import ClassOptions from "../forms/SelectOptions";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function App({ height, width }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [currentClass, setCurrentClass] = useState("Class 9");
  const [phoneNum, setPhoneNum] = useState(0);
  const [cookie, setCookie] = useCookies(["currentClass"]);
  useEffect(() => {
    setCurrentClass(cookie["currentClass"]);
  }, [cookie["currentClass"]]);
  const clickHandler = async (e) => {
    e.preventDefault();
    // router.push("/");
    let bodyData = {
      name: name,
      number: phoneNum,
      currentClass: currentClass,
    };
    try {
      const response = await axios.post(
        "https://usr6by-1337.csb.app/api/create/leaduser",
        bodyData
      );
      console.log("success created leading user");
      router.push("/");
    } catch (err) {
      console.log("there is an error on creating leading user ");
      console.error(err);
    }
  };
  return (
    <form onSubmit={clickHandler}>
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPhoneNum(e.target.value)}
            fullWidth
            label="Phone Number"
          />
          <YellowButton type={"submit"} text={"Submit"} />
        </div>
      </div>
    </form>
  );
}
