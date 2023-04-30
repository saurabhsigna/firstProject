import { useEffect } from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  // Log state

  return (
    <motion.div
      className="backdrop absolute flex items-center justify-center overflow-hidden bg-black top-0 left-0 h-full w-full"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
