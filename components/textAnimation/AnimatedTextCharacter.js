import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, color, size }) => {
  // splitting text into letters
  const letters = Array.from(text);
  let colors = {
    black: "text-black",
    white: "text-white",
  };
  let sizes = {
    bigHeading: "text-2xl lg:text-4xl",
    basicHeading: "text-xl lg:text-2xl",
  };
  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  let inputColor = colors[color];
  let inputHeadingSize = sizes[size];
  return (
    <motion.div
      className="text-center px-[10px]"
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: "2rem",
        color: "white",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          className={` ${inputColor}  ${inputHeadingSize} text-[30px]  md:text-lg`}
          variants={child}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
