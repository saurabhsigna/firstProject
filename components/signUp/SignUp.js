import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});

export const SignUpTwo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["userToken"]);
  const [registerBtn, setRegisterBtn] = useState("register");
  const [disableBtn, setDisableBtn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableBtn(true);
    setRegisterBtn("loading ");
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        setDisableBtn(false);
        setRegisterBtn("register");
        throw new Error("Invalid username or password");
      }

      console.log("okik");
      setDisableBtn(true);
      setRegisterBtn("success, Yay");
      const data = await response.text();
      setCookie("userToken", data, { path: "/" });
      router.push("/completeinfo");
      console.log(data);
    } catch (error) {
      console.log("errroejf");
      setRegisterBtn("register");

      setDisableBtn(false);
      console.error("Error fetching data:", error.message);
      setErrorMsg(error.message);
    }
  };

  return (
    <section>
      <div className="h-[88px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="sm:mx-auto lg:flex lg:flex-col lg:justify-center sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[70px] w-auto"
            src="/logo/logo2.png"
            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            {errorMsg && (
              <div className="text-red-500 my-2  text-2xl ">{errorMsg}</div>
            )}

            <p className=" text-base text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                href="/login"
              >
                Sign In
              </Link>
            </p>

            <form onSubmit={handleSubmit} method="POST" className="mt-8">
              <div className="space-y-5">
                <TextField
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  id="outlined-required"
                  size="small"
                  type="email"
                  fullWidth
                  label="Email"
                />

                <TextField
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  id="outlined-required"
                  size="small"
                  type="password"
                  fullWidth
                  label="Password"
                />

                {password && (
                  <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital"]}
                    minLength={6}
                    value={password}
                    onChange={(isValid) => {
                      setIsValidPassword(isValid.valueOf());
                    }}
                  />
                )}
                <div>
                  <button
                    type="submit"
                    disabled={disableBtn || !isValidPassword}
                    className={`inline-flex w-full items-center justify-center rounded-md ${
                      disableBtn ? "bg-indigo-400" : "bg-indigo-600"
                    }  px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500`}
                  >
                    {isValidPassword ? registerBtn : "enter correct password"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-2 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                onClick={() =>
                  (window.location =
                    process.env.NEXT_PUBLIC_BACKEND_URI + "/api/connect/google")
                }
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SignUpTwo.displayName = "SignUpTwo";
