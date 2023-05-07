import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCookies } from "react-cookie";
import Modal from "../modal/NewModal";
export default function App({ imgUri, subjectName, subjectPage }) {
  const [cookies] = useCookies(["currentClass"]);
  const currentClass = cookies["currentClass"];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    if (!currentClass) {
      setOpen(true);
    } else {
      router.push(`/courses/${subjectPage}`);
      return;
    }
  };
  return (
    <>
      <button onClick={clickHandler}>
        <div className="flex flex-col py-5 drop-shadow-md   bg-white  items-center gap-[20px] justify-center">
          <img src={imgUri} className="rounded-md" width={64} height={64} />

          {subjectName}
        </div>
      </button>
      {open && <Modal open={open} setOpen={setOpen} subject={subjectPage} />}
    </>
  );
}
