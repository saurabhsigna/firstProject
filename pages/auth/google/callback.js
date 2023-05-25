import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Stepper from "../../../components/forms/Stepper2";
import Form from "../../../components/forms/Form";
import { useCookies } from "react-cookie";

function GoogleAuthCallback({ auth }) {
  console.log("auth is ");
  console.log(auth);
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(auth?.user.isVerified);
  const [jwt, setJwt] = useState(auth?.jwt);
  const [cookie, setCookie] = useCookies(["user"]);
  const [userId, setUserId] = useState(auth?.user.id);
  const [provider, setProvider] = useState(auth?.user.provider);
  useEffect(() => {
    if (jwt) {
      setCookie("userToken", jwt, {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
    }
  }, [jwt]);
  useEffect(() => {
    if (isVerified) {
      router.push("/");
    }
  }, [isVerified]);

  return (
    <div className="mt-[100px]">
      <div> {!jwt && "nahi hai"}</div>
      {jwt && (
        <>
          <div className="flex items-center flex-col">
            <div className="w-[75%]">
              {!isVerified && (
                <div>
                  <Stepper />
                  <Form />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { access_token } = context.query;
  console.log("search is ", access_token);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/google/callback?access_token=${access_token}`
    );

    return {
      props: {
        auth: response.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        auth: null,
      },
    };
  }
}

export default GoogleAuthCallback;
