import React, { useEffect } from "react";
import ProfilePageComponent from "../../components/profile/ProfileComponent";
import { useRouter } from "next/router";

export default function App({ userData, error }) {
  const router = useRouter();

  useEffect(() => {
    if (error || !userData) {
      // Redirect to "https://freeschooool.com" when there is an error or no user data
      router.push("https://freeschooool.com");
    }
  }, [userData, error, router]);

  if (error || !userData) {
    // Return null if running the redirect
    return null;
  }

  return (
    <div>
      {/* <div className="h-[88px]"></div>
      <div>{JSON.stringify(userData)}</div> */}
      <ProfilePageComponent userData={userData} error={error} />
    </div>
  );
}

// Rest of the code remains the same

export async function getServerSideProps(context) {
  const { req } = context;

  // Get the cookie from the request headers
  const cookie = req.cookies.userToken;

  // Create a headers object with the authorization header
  const headers = {
    Authorization: `bearer ${cookie}`, // Use the cookie as the authorization header value
  };

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URI + "/api/users/me",
      {
        headers: headers,
      }
    );

    if (!res.ok) {
      const errorData = await res.json(); // Parse the error response from the server
      const errorMessage = errorData.message || "Failed to fetch data"; // Extract the error message

      throw new Error(errorMessage); // Throw the error with the custom error message
    }

    const userData = await res.json();

    return {
      props: {
        userData,
        error: null,
      },
    };
  } catch (error) {
    console.log("Error:", error); // Log the error

    return {
      props: {
        userData: null,
        error: error.message,
      },
    };
  }
}
