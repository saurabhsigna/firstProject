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
      <iframe
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
      />
    </div>
  );
}
