import React from "react";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();

  console.log(router.route); // current route
  console.log(router.query);
  return <div>{router.query.subject}</div>;
}
