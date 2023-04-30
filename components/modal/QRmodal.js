import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "./Backdrop";



const Modal = ({ handleClose, text }) => {

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


  return (
 
      
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal mx-auto max-w-700 min-w-1/2 md:w-[50%] w-[80%] max-h-300 min-h-1/2 h-1/2  rounded-md flex flex-col items-center bg-gradient-to-r from-yellow-500 to-red-500 transform -skew-x-10 "
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
  
    </Backdrop>

  );
};

const ModalText = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <h5 className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
      expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
      eos id. Porro, culpa? Officiis, placeat?
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button relative b-[1.4rem] min-h-[3rem]"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;