import React, { useEffect } from "react";

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
      <div className="w-[640px] h-[480px] relative">
        <iframe
          src="https://drive.google.com/file/d/1bi_bA-257gw-dFGlz-J3XmefN1tMwqf-/preview"
          width="640"
          height="480"
          allow="autoplay"
          allowFullScreen={true}
        ></iframe>
        <div className="w-[80px] h-[80px] absolute top-0 right-0 opacity-0"></div>
      </div>
    </div>
  );
}
