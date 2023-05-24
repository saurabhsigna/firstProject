import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Stepper from "../../components/forms/Stepper2";
import Form from "../../components/forms/Form";
import { useCookies } from "react-cookie";
import NextSeo from '../../components/seo/NextSeoComponent'
function CompleteInfo({ auth }) {
  console.log("auth is ");
  console.log(auth);
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(auth?.isVerified);
  //   const [jwt, setJwt] = useState(auth?.jwt);
  const [cookie, setCookie] = useCookies(["userToken"]);
  const userToken = cookie["userToken"];
  const [userId, setUserId] = useState(auth?.id);
  const [provider, setProvider] = useState(auth?.provider);
  //   useEffect(() => {
  //     if (jwt) {
  //       setCookie("userToken", jwt, {
  //         path: "/",
  //         maxAge: 3600, // Expires after 1hr
  //         sameSite: true,
  //       });
  //     }
  //   }, [jwt]);
  //   useEffect(() => {
  //     if (isVerified) {
  //       router.push("/");
  //     }
  //   }, [isVerified]);
  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
    if (auth?.isVerified) {
      console.log("is verified ");
      router.push("/");
    }
  }, [auth]);
  
  return (
    <div className="mt-[100px] mb-[50px]">
     <NextSeo title={"Complete Verification"} description="Complete the verification to access and buy the courses."/>
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.userToken;
  console.log("token is ", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `https://usr6by-1337.csb.app/api/users/me`,
      config
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

export default CompleteInfo;
