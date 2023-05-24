import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserInfoAtom } from "../atoms/UserInfoAtom";
import { fetchUserInfo } from "../utils/fetchUserInfo";

export default function App() {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const uri = process.env.NEXT_PUBLIC_BACKEND_URI;
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const token = cookies["userToken"];

  useEffect(() => {
    if (token && cookies) {
      fetchUserInfo(token)
        .then((res) => {
          setUserInfo(res);
        })
        .catch((error) => {
          if (error.message === "Invalid token") {
            removeCookie("userToken");
          } else {
            console.error(error);
          }
        });
    }
  }, [cookies]);
}
