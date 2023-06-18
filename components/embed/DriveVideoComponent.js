import React, { useEffect } from "react";
import styles from "../../styles/embed/DriveVideoComponent.module.css";
export default function App({ width, height, url, isVideoChanging }) {
  return (
    <div style={{}} className="flex flex-wrap justify-center lg:justify-start ">
      <div
        // style={{ width: `${width}px` }}
        className={`  h-[40vh] w-[90vw] sm:h-[50vh] lg:w-[800px] md:h-[60vh] lg:h-[450px] relative`}
      >
        <iframe
          src={
            url
              ? url
              : "https://freeschooool.sgp1.cdn.digitaloceanspaces.com/black.html"
          }
          className="w-[90vw] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:w-[800px] lg:h-[450px]"
          allow="autoplay"
          allowFullScreen={true}
        ></iframe>
        <div className=" h-[80px] absolute top-0 right-0 opacity-1">
          <img src="/logo/logo4.jpeg" className="w-[66px]" />
        </div>
      </div>
    </div>
  );
}
