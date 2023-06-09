import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <button className="relative" onClick={clickHandler}>
        <motion.img
          whileHover={{ scale: 1.05 }}
          alt="go inside"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute z-[2] right-[10px] top-[10px]"
          src="/service/rightArrowSubject.svg"
          width="30"
          height="30"
        />
        <motion.div
          className={`flex  flex-col py-5 drop-shadow-md 
          bg-white  items-center gap-[20px] justify-center 
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img
            src={imgUri}
            alt={subjectName}
            className="rounded-md"
            width={64}
            height={64}
          />

          {subjectName}
        </motion.div>
      </button>
      {open && <Modal open={open} setOpen={setOpen} subject={subjectPage} />}
    </>
  );
}
