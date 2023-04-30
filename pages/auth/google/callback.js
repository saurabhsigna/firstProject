import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Stepper from "../../../components/forms/Stepper.tsx";
import Form from "../../../components/forms/Form";
import { useCookies } from "react-cookie";

function GoogleAuthCallback({ auth }) {
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
  
  return (
    <div className="mt-[100px]">
      <div> {!jwt && "nahi hai"}</div>
      {jwt && (
        <>
            <div className="flex items-center flex-col">
          <div className="w-[75%]">
              <Stepper />
              <Form />
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
      `https://usr6by-1337.csb.app/api/auth/google/callback?access_token=${access_token}`
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
