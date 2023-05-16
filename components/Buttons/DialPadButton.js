import React from "react";

const DialPadButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const dialPadURL = `tel:${phoneNumber}`;
    window.open(dialPadURL, "_self");
  };

  return <button onClick={handleClick}>Open Dial Pad</button>;
};

export default DialPadButton;
