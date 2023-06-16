import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId, height, width }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
      controls: 1,
      fs: 1, // Enables fullscreen
      iv_load_policy: 1,
      showinfo: 1,
      rel: 0,
      cc_load_policy: 1,
      start: 0,
      end: 0,
      origin: "http://youtubeembedcode.com",
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
