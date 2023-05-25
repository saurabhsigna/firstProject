import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/AuthAtom";
import { fetchUserInfo } from "../utils/fetchUserInfo";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export function useEmail() {
  const [email, setEmail] = useRecoilState(authAtom);
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const token = cookies["userToken"];
  useEffect(() => {
    // Check for specific routes
    const protectedRoutes = [];

    const shouldRedirect = !token && protectedRoutes.includes(router.pathname);

    if (shouldRedirect) {
      router.push("/login");
      return;
    }

    if (isNavigating) {
      // User is navigating with Link, skip email fetch
      setIsNavigating(false);
      return;
    }
    if (token && cookies) {
      console.log("meetingpae");
      fetchUserInfo(token)
        .then((newEmail) => setEmail(newEmail))
        .catch((error) => {
          if (error.message === "Invalid token") {
            removeCookie("userToken");
            router.push("/login");
          } else {
            console.error(error);
          }
        });
    }
  }, [isNavigating, cookies]);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsNavigating(true);
    const handleRouteChangeComplete = () => setIsNavigating(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return email;
}
