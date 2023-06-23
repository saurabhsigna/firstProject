import React from "react";

export default function App({ heading, description }) {
  return (
    <>
      <h3 class="text-2xl flex items-center font-extrabold mb-4">
        <img
          className=" w-6 h-6 mr-2 object-contain"
          src="https://shuffle.dev/nigodo-assets/circle-icon-green.svg"
          alt=""
        />
        <span>{heading}</span>
      </h3>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        class="text-xl  leading-7 mb-10"
      />
    </>
  );
}
