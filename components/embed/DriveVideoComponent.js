import React from "react";
import styles from "../../styles/embed/DriveVideoComponent.module.css";
export default function App({ width, height }) {
  return (
    <div style={{}}>
      <div
        style={{ width: `${width}px` }}
        className={` h-[${height}px] relative`}
      >
        <iframe
          className={styles.iframe}
          src="https://drive.google.com/file/d/1K2yRW704YBTQcLFDRSOdod5clMhoveP6/preview"
          // width={width}
          // height={height}
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
