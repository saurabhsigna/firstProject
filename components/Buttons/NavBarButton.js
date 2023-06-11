import React from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavButtonComponent({ href, name, current }) {
  return (
    <Link title={name} href={href} key={name}>
      <div
        key={name}
        className={classNames(
          "bg-gray-900 text-white hover:text-gray-900 hover:bg-white hover:border-black border border-gray-900",
          "rounded-md px-3 transition-colors duration-300 ease-in-out py-2 text-sm font-medium"
        )}
        aria-current={current ? "page" : undefined}
      >
        {name}
      </div>
    </Link>
  );
}
