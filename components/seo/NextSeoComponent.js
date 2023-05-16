import React from "react";
import { NextSeo } from "next-seo";

export default function App({
  title,
  description,
  canonical,
  url,
  imgUri,
  imgAlt,
}) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: imgUri,
            width: 800,
            height: 600,
            alt: { imgAlt },
            //   type: "image/jpeg",
          },

          { url:imgUri },
        ],
        siteName: "saurabh1stproject",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
