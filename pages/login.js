import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { PasswordChecklist } from "react-password-checklist";
import { useCookies } from "react-cookie";
import Link from "next/link";
import dynamic from "next/dynamic";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const router = useRouter();
  const [loginBtnText, setLoginBtnText] = useState("login");
  const [cookie, setCookie] = useCookies(["userToken"]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [usePhoneNumber, setUsePhoneNumber] = useState(false);
  const [requiredInput, setRequiredInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onInputSelection = () => {
    if (usePhoneNumber) {
      setEmail("");
      setPhoneNumber("");
      setUsePhoneNumber(false);
      setRequiredInput(false);
    } else {
      setEmail("");
      setPhoneNumber("");
      setUsePhoneNumber(true);
      setRequiredInput(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRequiredInput(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            number: phoneNumber,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        setDisableBtn(false);
        setLoginBtnText("login again");

        throw new Error("Invalid username or password");
      }

      console.log("okik");
      setDisableBtn(true);
      setLoginBtnText("success, Yay");
      const data = await response.json();
      setCookie("userToken", data.token, { path: "/" });
      console.log("data   a");
      console.log(data);

      if (!data.verified) {
        router.push("/");
      } else {
        router.push("/completeinfo");
      }
      console.log(data);
    } catch (error) {
      setLoginBtnText("login again");
      setDisableBtn(false);
      setErrorMsg(error.message);
      console.log("errroejf");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="h-[88px]"></div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
        {errorMsg && (
          <div className="text-red-500 my-2  text-center  text-2xl ">
            {errorMsg}
          </div>
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {usePhoneNumber ? "Phone Number" : "Email address"}
              </label>
              <div className="mt-2">
                {!usePhoneNumber ? (
                  <>
                    <div className="mb-3 flex p-4 mx-2 dark:bg-gray-800 bg-gray-200  rounded">
                      <input
                        className="w-full text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none"
                        type="email"
                        value={email}
                        required={requiredInput}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                      />
                      <svg
                        className="h-6 w-6 ml-4 my-auto text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3 flex p-4 mx-2 dark:bg-gray-800 bg-gray-200  rounded">
                      <input
                        className="w-full text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none"
                        required={requiredInput}
                        minLength={10}
                        maxLength={10}
                        value={phoneNumber}
                        pattern="[0-9]{10}"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="tel"
                        inputMode="numeric"
                        id="outlined-required"
                        size="small"
                        placeholder="Phone Number"
                      />

                      {/* <svg
                        className="h-6 w-6 ml-4 my-auto text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 21"
                        stroke="currentColor"
                      >
                        <path
                          d="M17.94 11C17.72 11 17.49 10.93 17.27 10.88C16.8245 10.7818 16.3867 10.6515 15.96 10.49C15.4961 10.3212 14.9861 10.33 14.5283 10.5146C14.0705 10.6992 13.6971 11.0466 13.48 11.49L13.26 11.94C12.286 11.3982 11.391 10.7252 10.6 9.93999C9.81476 9.14901 9.14182 8.25399 8.59999 7.27999L9.01999 6.99999C9.46336 6.78291 9.81078 6.40952 9.99539 5.95168C10.18 5.49384 10.1888 4.9839 10.02 4.51999C9.86122 4.09241 9.73093 3.65479 9.62999 3.20999C9.57999 2.98999 9.53999 2.75999 9.50999 2.52999C9.38856 1.82561 9.01962 1.18773 8.46962 0.731229C7.91961 0.274727 7.22469 0.029599 6.50999 0.0399902H3.50999C3.07903 0.0359436 2.65224 0.124804 2.2587 0.300521C1.86516 0.476238 1.5141 0.734686 1.22942 1.05827C0.944745 1.38186 0.733129 1.76298 0.608982 2.1757C0.484835 2.58842 0.451073 3.02305 0.509994 3.44999C1.04273 7.63937 2.95602 11.5319 5.94765 14.5126C8.93927 17.4934 12.8387 19.3925 17.03 19.91H17.41C18.1474 19.9111 18.8594 19.6405 19.41 19.15C19.7264 18.867 19.9791 18.5202 20.1515 18.1323C20.3238 17.7444 20.412 17.3244 20.41 16.9V13.9C20.3977 13.2054 20.1448 12.5365 19.6943 12.0077C19.2439 11.4788 18.6238 11.1226 17.94 11V11ZM18.44 17C18.4398 17.142 18.4094 17.2823 18.3508 17.4116C18.2922 17.5409 18.2067 17.6563 18.1 17.75C17.9904 17.8498 17.86 17.9241 17.7181 17.9673C17.5763 18.0106 17.4267 18.0217 17.28 18C13.5349 17.5198 10.0562 15.8065 7.39271 13.1303C4.72919 10.4541 3.0324 6.96733 2.56999 3.21999C2.55408 3.07351 2.56803 2.92532 2.611 2.78438C2.65397 2.64344 2.72506 2.51268 2.81999 2.39999C2.9137 2.29332 3.02906 2.20783 3.15837 2.14921C3.28769 2.09058 3.42801 2.06017 3.56999 2.05999H6.56999C6.80254 2.05482 7.02962 2.13087 7.21214 2.27506C7.39466 2.41925 7.5212 2.62256 7.56999 2.84999C7.60999 3.12332 7.65999 3.39332 7.71999 3.65999C7.83551 4.18713 7.98925 4.70517 8.17999 5.20999L6.77999 5.85999C6.66029 5.91491 6.55262 5.99294 6.46315 6.08959C6.37369 6.18624 6.30419 6.2996 6.25867 6.42318C6.21314 6.54677 6.19247 6.67812 6.19784 6.80971C6.20322 6.9413 6.23453 7.07054 6.28999 7.18999C7.72919 10.2727 10.2072 12.7508 13.29 14.19C13.5335 14.29 13.8065 14.29 14.05 14.19C14.1747 14.1454 14.2893 14.0764 14.3872 13.9872C14.485 13.8979 14.5642 13.7901 14.62 13.67L15.24 12.27C15.757 12.4549 16.2846 12.6085 16.82 12.73C17.0867 12.79 17.3567 12.84 17.63 12.88C17.8574 12.9288 18.0607 13.0553 18.2049 13.2378C18.3491 13.4204 18.4252 13.6474 18.42 13.88L18.44 17ZM17.5 7.99999C17.7652 7.99999 18.0196 7.89463 18.2071 7.7071C18.3946 7.51956 18.5 7.26521 18.5 6.99999V2.99999C18.5 2.73477 18.3946 2.48042 18.2071 2.29288C18.0196 2.10535 17.7652 1.99999 17.5 1.99999C17.2348 1.99999 16.9804 2.10535 16.7929 2.29288C16.6054 2.48042 16.5 2.73477 16.5 2.99999V6.99999C16.5 7.26521 16.6054 7.51956 16.7929 7.7071C16.9804 7.89463 17.2348 7.99999 17.5 7.99999ZM13.5 7.99999C13.7652 7.99999 14.0196 7.89463 14.2071 7.7071C14.3946 7.51956 14.5 7.26521 14.5 6.99999V2.99999C14.5 2.73477 14.3946 2.48042 14.2071 2.29288C14.0196 2.10535 13.7652 1.99999 13.5 1.99999C13.2348 1.99999 12.9804 2.10535 12.7929 2.29288C12.6054 2.48042 12.5 2.73477 12.5 2.99999V6.99999C12.5 7.26521 12.6054 7.51956 12.7929 7.7071C12.9804 7.89463 13.2348 7.99999 13.5 7.99999Z"
                          fill="currentColor"
                        ></path>
                      </svg> */}

                      <svg
                        width="21"
                        height="20"
                        viewbox="0 0 21 20"
                        className="text-gray-300"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.94 11C17.72 11 17.49 10.93 17.27 10.88C16.8245 10.7818 16.3867 10.6515 15.96 10.49C15.4961 10.3212 14.9861 10.33 14.5283 10.5146C14.0705 10.6992 13.6971 11.0466 13.48 11.49L13.26 11.94C12.286 11.3982 11.391 10.7252 10.6 9.93999C9.81476 9.14901 9.14182 8.25399 8.59999 7.27999L9.01999 6.99999C9.46336 6.78291 9.81078 6.40952 9.99539 5.95168C10.18 5.49384 10.1888 4.9839 10.02 4.51999C9.86122 4.09241 9.73093 3.65479 9.62999 3.20999C9.57999 2.98999 9.53999 2.75999 9.50999 2.52999C9.38856 1.82561 9.01962 1.18773 8.46962 0.731229C7.91961 0.274727 7.22469 0.029599 6.50999 0.0399902H3.50999C3.07903 0.0359436 2.65224 0.124804 2.2587 0.300521C1.86516 0.476238 1.5141 0.734686 1.22942 1.05827C0.944745 1.38186 0.733129 1.76298 0.608982 2.1757C0.484835 2.58842 0.451073 3.02305 0.509994 3.44999C1.04273 7.63937 2.95602 11.5319 5.94765 14.5126C8.93927 17.4934 12.8387 19.3925 17.03 19.91H17.41C18.1474 19.9111 18.8594 19.6405 19.41 19.15C19.7264 18.867 19.9791 18.5202 20.1515 18.1323C20.3238 17.7444 20.412 17.3244 20.41 16.9V13.9C20.3977 13.2054 20.1448 12.5365 19.6943 12.0077C19.2439 11.4788 18.6238 11.1226 17.94 11V11ZM18.44 17C18.4398 17.142 18.4094 17.2823 18.3508 17.4116C18.2922 17.5409 18.2067 17.6563 18.1 17.75C17.9904 17.8498 17.86 17.9241 17.7181 17.9673C17.5763 18.0106 17.4267 18.0217 17.28 18C13.5349 17.5198 10.0562 15.8065 7.39271 13.1303C4.72919 10.4541 3.0324 6.96733 2.56999 3.21999C2.55408 3.07351 2.56803 2.92532 2.611 2.78438C2.65397 2.64344 2.72506 2.51268 2.81999 2.39999C2.9137 2.29332 3.02906 2.20783 3.15837 2.14921C3.28769 2.09058 3.42801 2.06017 3.56999 2.05999H6.56999C6.80254 2.05482 7.02962 2.13087 7.21214 2.27506C7.39466 2.41925 7.5212 2.62256 7.56999 2.84999C7.60999 3.12332 7.65999 3.39332 7.71999 3.65999C7.83551 4.18713 7.98925 4.70517 8.17999 5.20999L6.77999 5.85999C6.66029 5.91491 6.55262 5.99294 6.46315 6.08959C6.37369 6.18624 6.30419 6.2996 6.25867 6.42318C6.21314 6.54677 6.19247 6.67812 6.19784 6.80971C6.20322 6.9413 6.23453 7.07054 6.28999 7.18999C7.72919 10.2727 10.2072 12.7508 13.29 14.19C13.5335 14.29 13.8065 14.29 14.05 14.19C14.1747 14.1454 14.2893 14.0764 14.3872 13.9872C14.485 13.8979 14.5642 13.7901 14.62 13.67L15.24 12.27C15.757 12.4549 16.2846 12.6085 16.82 12.73C17.0867 12.79 17.3567 12.84 17.63 12.88C17.8574 12.9288 18.0607 13.0553 18.2049 13.2378C18.3491 13.4204 18.4252 13.6474 18.42 13.88L18.44 17ZM17.5 7.99999C17.7652 7.99999 18.0196 7.89463 18.2071 7.7071C18.3946 7.51956 18.5 7.26521 18.5 6.99999V2.99999C18.5 2.73477 18.3946 2.48042 18.2071 2.29288C18.0196 2.10535 17.7652 1.99999 17.5 1.99999C17.2348 1.99999 16.9804 2.10535 16.7929 2.29288C16.6054 2.48042 16.5 2.73477 16.5 2.99999V6.99999C16.5 7.26521 16.6054 7.51956 16.7929 7.7071C16.9804 7.89463 17.2348 7.99999 17.5 7.99999ZM13.5 7.99999C13.7652 7.99999 14.0196 7.89463 14.2071 7.7071C14.3946 7.51956 14.5 7.26521 14.5 6.99999V2.99999C14.5 2.73477 14.3946 2.48042 14.2071 2.29288C14.0196 2.10535 13.7652 1.99999 13.5 1.99999C13.2348 1.99999 12.9804 2.10535 12.7929 2.29288C12.6054 2.48042 12.5 2.73477 12.5 2.99999V6.99999C12.5 7.26521 12.6054 7.51956 12.7929 7.7071C12.9804 7.89463 13.2348 7.99999 13.5 7.99999Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline text-center w-full focus:text-indigo-700">
              <button type="button" onClick={onInputSelection}>
                {" "}
                {usePhoneNumber
                  ? "Use Email Id Instead"
                  : "Use Phone Number Instead"}
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>

              <div className="mb-6 flex p-4 mx-2 dark:bg-gray-800 bg-gray-200 rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full  text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none"
                  placeholder="Enter your password"
                  required={requiredInput}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mt-6">
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
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={disableBtn || !isValidPassword}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isValidPassword ? loginBtnText : "enter correct password"}
              </button>
            </div>
          </form>
          <div className="text-center  my-5 text-grey-300">OR</div>
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

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up/Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
