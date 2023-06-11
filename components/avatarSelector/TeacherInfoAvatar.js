import React from "react";

export default function App({ name, image, description }) {
  return (
    <div>
      <img src={image} className="rounded-full w-[20px] h-[20px]" />
      <h2>{name}</h2>
    </div>
  );
}
