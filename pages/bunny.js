import React, { useEffect } from "react";
import DialPadButton from "../components/Buttons/DialPadButton";
export default function App() {
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (document.body.clientWidth < 450) {
        screen.orientation.lock("landscape");
      }
    });
  }, []);
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      {/* <iframe
        src={
          "https://iframe.mediadelivery.net/embed/116313/9478e027-a30b-4256-9658-9a5000c02779?autoplay=true"
        }
        loading="lazy"
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      /> */}
      {/* <DialPadButton phoneNumber={1234567890} /> */}
      <div className="w-[640px] h-[480px] relative">
        <iframe
          src="https://drive.google.com/file/d/17nxEemHbxaCEmJz_rCUXQRq9W4rwPK_w/preview"
          width="640"
          height="480"
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
