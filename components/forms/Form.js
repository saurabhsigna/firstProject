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
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SelectOptions from "../forms/SelectOptions";
import TextField from "@mui/material/TextField";
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
  useEffect(() => {
    setCurrentClass(cookie["currentClass"]);
    console.log("class changed");
  }, [cookie["currentClass"]]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://usr6by-1337.csb.app/api/users/updateuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie["userToken"]}`,
          },
          body: JSON.stringify({
            name: fullName,
            age: age,
            currentClass: currentClass,
            address,
            mobileNum: phoneNum,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("some error happened ");
      }

      console.log("okik");
      const data = await response.text();

      router.push("/");
      console.log(data);
    } catch (error) {
      console.log("errroejf");
      console.error("Error fetching data:", error);
    }
    console.log(fullName, currentClass, address, phoneNum, age);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12"></div>

        <div className="border-b border-gray-900/10 pb-12">
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
                onChange={(e) => setPhoneNum(e.target.value)}
                type={"tel"}
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

            <SelectOptions />
          </div>
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
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
