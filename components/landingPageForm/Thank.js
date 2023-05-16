import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import YellowButton from "../Buttons/YellowButton";
export default function App({ showConfetti, setShowConfetti }) {
  const { width, height } = useWindowSize();
  console.log("what is hehigt and wiedht", width);
  const [confettiWidth, setConfettiWidth] = useState(0);
  const [confettiHeight, setConfettiHeight] = useState(0);

  useEffect(() => {
    setConfettiWidth(width);
  }, [width]);
  useEffect(() => {
    setConfettiHeight(height);
  }, [height]);
  return (
    <Confetti
      width={confettiWidth - 10}
      height={confettiHeight}
      style={{ pointerEvents: "none" }}
      numberOfPieces={showConfetti ? 500 : 0}
      recycle={false}
      onConfettiComplete={(confetti) => {
        setShowConfetti(false);
        confetti.reset();
      }}
    />
  );
}
