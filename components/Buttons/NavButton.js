import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing,
  children,
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-4  py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 hover:text-gray-900 hover:bg-white hover:border-black border border-gray-900 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
