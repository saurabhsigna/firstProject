/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { useState, useEffect } from "react";
import AvatarSelect from "../avatarSelector/AvatarSelectComponent";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SelectOptions from "../forms/SelectOptions";
import TextField from "@mui/material/TextField";
import SelectBoard from "./BoardSelectOptions";
import axios from "axios";
import { useRouter } from "next/router";

import { useCookies } from "react-cookie";

export default function App() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(14);
  const [currentClass, setCurrentClass] = useState("");
  const [cookie, setCookie] = useCookies();
  const [imgAvatar, setImgAvatar] = useState("01.png");
  const [board, setBoard] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [buttonText, setButtonText] = useState("save");
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    setCurrentClass(cookie["currentClass"]);
    console.log("class changed");
  }, [cookie["currentClass"]]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setButtonText("saving");
    setDisableBtn(true);
    try {
      await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/api/users/updateuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie["userToken"]}`,
          },
          body: JSON.stringify({
            name: fullName,
            age: age,
            imgAvatar,
            currentClass: currentClass,
            address,
            board,
            mobileNum: phoneNum,
          }),
        }
      )
        .then((res) => {
          if (res.ok) {
            router.push("/");
            setButtonText("saved");
            console.log("Success");
          } else {
            return res.json().then((errorResponse) => {
              setDisableBtn(false);
              setButtonText("try again");
              console.log(errorResponse.response);
              setErrMsg(errorResponse.response);
              throw new Error(JSON.stringify(errorResponse));
            });
          }
        })
        .catch((err) => {
          setErrMsg(JSON.parse(err.message).response);

          console.log("Error:", err.message);
        });
    } catch (error) {
      setButtonText("try again");
      setDisableBtn(false);
      setErrMsg(error.message);
      console.log("errroejf");
      console.log(error);
    }
    console.log(fullName, currentClass, address, phoneNum, age);
  };
  return (
    <div>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12"></div>
        <div>
          {" "}
          {errMsg && (
            <h1 className="text-red-700 font-semibold text-xl">{errMsg}</h1>
          )}
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <AvatarSelect imgAvatar={imgAvatar} setImgAvatar={setImgAvatar} />
          <form onSubmit={submitHandler}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <TextField
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  id="outlined-required"
                  size="small"
                  fullWidth
                  label="Full Name"
                />
              </div>
              <div className="sm:col-span-3">
                <TextField
                  required
                  inputProps={{
                    minLength: 10,
                    maxLength: 10,
                    pattern: "[0-9]*",
                  }}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  type="tel"
                  id="outlined-required"
                  size="small"
                  fullWidth
                  label="Phone Number"
                  placeholder="without +91"
                />
              </div>

              <div className="col-span-full">
                <TextField
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  id="outlined-required"
                  size="small"
                  fullWidth
                  label="Address"
                />
              </div>
              <div className="sm:col-span-2">
                <TextField
                  required
                  type="number"
                  defaultValue="Small"
                  onChange={(e) => setAge(e.target.value)}
                  id="outlined-required"
                  size="small"
                  fullWidth
                  label="Age"
                />
              </div>

              <div className="sm:col-span-2">
                <SelectOptions />
              </div>
              <div className="sm:col-span-2">
                <SelectBoard board={board} setBoard={setBoard} />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                disabled={disableBtn}
                type="submit"
                className={` rounded-md ${
                  disableBtn ? "bg-indigo-400" : "bg-indigo-600"
                }  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
