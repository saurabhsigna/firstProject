import { Fragment, useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
// import { useEmail } from "../hooks/useEmail";
import Button from "../components/Buttons/NavButton";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { UserInfoAtom } from "../atoms/UserInfoAtom";
import YellowButton from "../components/Buttons/YellowButton";
import { useCookies } from "react-cookie";
import useInfo from "../hooks/useInfo";
import NavCallButton from "../components/Buttons/NavCallButton";
import NavButtonComponent from "../components/Buttons/NavBarButton";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [cookies, setCookies, removeCookie] = useCookies(["userToken"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [isOpen, setIsOpen] = useState(false);
  const disclosureRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const [name, setName] = useState("");
  const dd = useInfo();
  useEffect(() => {
    const token1 = cookies["userToken"];
    console.log(token1);
    if (token1 && userInfo?.id) {
      setIsLoggedIn(true);
    } else {
    }
    setToken(token1);
    console.log(token1, token);
    if (userInfo && !userInfo.loading) {
      setIsVerified(userInfo.isVerified);
      console.log(userInfo);

      if (!userInfo.isVerified && userInfo.id) {
        if (
          router.pathname !== "/signup" &&
          router.pathname !== "/completeinfo"
        ) {
          notifyAboutVerification();
        }
      }

      if (userInfo.fullName) {
        let name = userInfo.fullName.split(" ")[0];
        setUserName(name);
      }
    }
  }, [userInfo, token]);

  const notifyAboutVerification = () => {
    toast(
      (t) => (
        <span>
          <span>Please complete verification </span>
          <button onClick={() => router.push("/completeinfo")}>
            {"  "}
            <b className="underline"> Click Here </b>
          </button>
        </span>
      ),
      {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      }
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        disclosureRef.current &&
        !disclosureRef.current.contains(event.target)
      ) {
        console.log("hi how are you ");
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // const getAuthEmail = useEmail();

  const removeCookieButtonHandler = async () => {
    await router.push("/");
    removeCookie("userToken");
    router.reload();
  };

  const profileButtonHandler = () => {
    router.push("/profile");
  };
  const XmarkButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      as="nav"
      className="bg-transparent  fixed w-screen backdrop-filter backdrop-blur-sm border-b  bg-opacity-20 top-0 z-10"
    >
      <Toaster toastOptions={{ duration: 5600 }} />
      <Dialog
        open={isOpen}
        style={{ width: "97vw" }}
        className={`fixed  top-[56px]  `}
        onClose={setIsOpen}
      >
        <Dialog.Panel
          style={{ width: "97vw" }}
          className="sm:hidden bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-80 "
        >
          <div className="space-y-1 w-full px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link title={item.name} href={item.href} key={item.name}>
                <button
                  key={item.name}
                  as="a"
                  onClick={() => setIsOpen(false)}
                  href={item.href}
                  className={classNames(
                    "bg-gray-900 text-white",
                    "block rounded-md px-3 py-2 my-2 w-full text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <YellowButton text="guruji number" />
          </div>
        </Dialog.Panel>
      </Dialog>

      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}

              <button
                onClick={XmarkButton}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div
              className={`flex flex-1 items-center  md:ml-[0px] justify-center sm:items-stretch sm:justify-start`}
            >
              <div className="flex flex-shrink-0 items-center">
                <Link title={"index page"} href="/">
                  <img
                    className="block h-[50px] md:h-[40px] w-auto lg:hidden"
                    src="/logo/logo2.png"
                    // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Personal Mentor Logo"
                  />
                </Link>
                <Link title="index page" href="/">
                  <img
                    className="hidden h-[40px] w-auto lg:block"
                    src="/logo/logo2.png"
                    alt="Personal Mentor Logo"
                  />
                </Link>
              </div>
              <div
                style={{ marginBlock: "auto" }}
                className="hidden sm:ml-6 sm:block"
              >
                <div className="flex space-x-4">
                  {/* {isLoggedIn && (
                    <Link title="mainpage" href={"/mainpage"} key={"itemDash"}>
                      <div
                        key={"itemDash"}
                        className={classNames(
                          "bg-gray-900 text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        Dashboard
                      </div>
                    </Link>
                  )} */}
                  {navigation.map((item, index) => (
                    <NavButtonComponent
                      key={index}
                      current={item.current}
                      href={item.href}
                      name={item.name}
                    />
                  ))}
                  <NavCallButton name="8368118716" />
                </div>
              </div>
            </div>
            {isLoggedIn ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center rounded-[0.3rem] bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 py-[0.4rem] px-[0.75rem]">
                      <span className="sr-only">Open user menu</span>
                      {userName ? (
                        <h2 className="text-white invisible sm:visible   mr-[0.5rem] font-[440] tracking-[0.5px] text-[0.875rem]">
                          {userName}
                        </h2>
                      ) : (
                        <h2 className="text-white mr-[0.5rem] font-[440] tracking-[0.5px] text-[0.875rem]">
                          pls verify
                        </h2>
                      )}
                      {isVerified ? (
                        <img
                          className="h-6 w-6 rounded-full"
                          src={"/avatars/" + userInfo.imgAvatar}
                          alt="User Profile"
                        />
                      ) : (
                        <div className="bg-white h-6 w-6 rounded-full"></div>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            title="profile page"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      {!isVerified && (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/completeinfo"
                              title="complete verification"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Verify here
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={removeCookieButtonHandler}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 text-left w-full"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : userInfo?.loading && token ? (
              <div className="text-white p-2 rounded-md bg-gray-700">
                loading
              </div>
            ) : (
              <div className="flex items-center gap-[10px] absolute right-[1px]">
                <Link href={"/signup"} title="register">
                  <Button className="bg-[#6366f1]">Sign Up</Button>
                </Link>
                <Link href={"/login"} title="login">
                  <Button className="bg-[#6366f1] hidden sm:block">
                    Log In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
