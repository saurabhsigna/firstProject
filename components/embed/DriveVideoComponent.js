import React from "react";
import styles from "../../styles/embed/DriveVideoComponent.module.css";
export default function App({ width, height }) {
  return (
    <div
      style={{}}
      className="flex flex-wrap justify-center lg:justify-start lg:ml-5"
    >
      <div
        // style={{ width: `${width}px` }}
        className={`  h-[40vh] w-[90vw] sm:h-[50vh] lg:w-[763px]  lg:h-[429px] relative`}
      >
        <iframe
          src="https://drive.google.com/file/d/1K2yRW704YBTQcLFDRSOdod5clMhoveP6/preview"
          className="w-[90vw] h-[40vh] sm:h-[50vh] lg:w-[763px] lg:h-[429px]"
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
