import React, { useState, useEffect } from "react";
import YellowButton from "../Buttons/YellowButton";
import Thank from "./Thank";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import ClassOptions from "../forms/SelectOptions";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import BoardOptions from "../forms/BoardSelectOptions";
export default function App({ height, width }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [currentClass, setCurrentClass] = useState("Class 9");
  const [phoneNum, setPhoneNum] = useState(0);
  const [board, setBoard] = useState("");
  const [cookie, setCookie] = useCookies(["currentClass"]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [btnText, setBtnText] = useState("Submit");
  useEffect(() => {
    setCurrentClass(cookie["currentClass"]);
  }, [cookie["currentClass"]]);
  const clickHandler = async (e) => {
    e.preventDefault();
    setDisabledButton(true);
    setBtnText("Submitting");
    // router.push("/");
    let bodyData = {
      name: name,
      number: phoneNum,
      board,
      currentClass: currentClass,
    };
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/api/create/leaduser",
        bodyData
      );
      console.log("success created leading user");
      setBtnText("submitted");
      setShowConfetti(!showConfetti);
      router.push("/");
    } catch (err) {
      setDisabledButton(false);
      setBtnText("error,try again");
      console.log("there is an error on creating leading user ");
      console.error(err.response.data);
      setErrMsg(err.response.data || err.response.error.message);
    }
  };
  return (
    <>
      {errMsg && (
        <div className="flex items-center justify-center">
          {" "}
          <h1 className="text-xl text-red-400">{errMsg}</h1>
        </div>
      )}
      <h1 className="text-3xl text-center mt-[2rem]">
        Book a Free Demo Class Today{" "}
      </h1>
      <form onSubmit={clickHandler}>
        <div
          style={{ height: `${height - 100}px` }}
          className={`flex  items-center justify-center lg:justify-center lg:items-end lg:ml-[1.4rem] max-w-screen `}
        >
          <div
            className={`rounded-md xl:mt-[1remm] 
        p-10 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw]
         border border-white bg-white backdrop-filter
          backdrop-blur-sm border-b  flex flex-col gap-[19px]
          md:py-[2rem]
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
            <BoardOptions board={board} setBoard={setBoard} />
            <TextField
              required
              placeholder="enter your number"
              id="outlined-required"
              size="small"
              InputProps={{
                inputProps: {
                  minLength: 10,
                  maxLength: 10,
                  pattern: "[0-9]*",
                },
              }}
              type={"tel"}
              onChange={(e) => setPhoneNum(e.target.value)}
              fullWidth
              label="Phone Number"
            />
            <YellowButton
              disabled={disabledButton}
              type={"submit"}
              text={btnText}
            />
          </div>
        </div>
      </form>
      <Thank showConfetti={showConfetti} setShowConfetti={setShowConfetti} />
    </>
  );
}
