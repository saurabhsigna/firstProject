import React from "react";
import Link from "next/link";

import styles from "../../styles/leadform/leadcourse.module.css";
export default function App({ title, description, href, img }) {
  return (
    <Link href={href}>
      <div
        class={`relative  max-w-[328px] min-h-[324px] max-h-full mx-[16px] my-[8px] md:m-0   md:w-[390px] md:max-w-[390px]  cursor-pointer rounded-md border border-gray-300 bg-white shadow-inner ${styles.box}`}
      >
        <div class="relative h-[195px] overflow-hidden rounded-t-md bg-yellow-200">
          <img src={img} className="w-full h-full object-fill" />
        </div>
        <div class="px-[14.5px] py-[9.51px] pb-[11px]">
          <div class="min-h-[66.73px] w-full border-b border-dashed border-gray-300 pb-[8.5px]">
            <h2 class="font-poppins line-clamp-1 overflow-hidden whitespace-normal text-[20px] font-semibold leading-[140%] text-[#01202b]">
              {title}
            </h2>
            <p class="font-poppins text-[14px] leading-[164%] line-clamp-2 min-h-[46px] overflow-hidden whitespace-normal font-normal text-[#5f747d]">
              {description}
            </p>
          </div>
          {/* <div class="flex min-h-[78.86px] flex-col pt-[8.51px]"></div> */}
        </div>
        <div class="relative bottom-[10.57px] left-0 right-0 flex md:min-h-[76.8px] flex-col items-center min-h-[45px] py-0 px-[12px] md:flex md:justify-center">
          <button
            class={`font-inherit h-[36px] min-w-[min(350px,100%)] cursor-pointer rounded-md border-none bg-[#ff693d] p-0 text-center text-base font-medium leading-6 text-white outline-inherit ${styles.buttonShadow}`}
          >
            View Course Details
          </button>
        </div>
      </div>
    </Link>
  );
}
