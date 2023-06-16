import React from "react";

export default function App({ name, image, description }) {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={image}
        className="rounded-full cursor-pointer  transition-all ease-linear duration-200  hover:rounded-[0] w-[20px] h-[20px]"
      />
      <h2 className="hover:underline hover:text-blue-600 cursor-pointer">
        {name}
      </h2>
    </div>
  );
}
