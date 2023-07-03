import "../styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import type { AppProps } from "next/app";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
// import Cursor, { CursorRef } from "../components/animation/Cursor";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // // const cursorRef = React.useRef<CursorRef>(null);

  // // React.useEffect(() => {
  // //   router.events.on("routeChangeComplete", progressDone);
  // //   router.events.on("routeChangeError", progressDone);

  // //   return () => {
  // //     router.events.off("routeChangeComplete", progressDone);
  // //     router.events.off("routeChangeError", progressDone);
  // //   };
  // // }, []);

  // // const progressDone = () => {
  // //   const { current: cursor } = cursorRef;
  // //   if (cursor) {
  // //     cursor.update();
  // //   }
  // // };
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <RecoilRoot>
        <div>
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Navbar />
          <Component {...pageProps} />
        </div>

        {router.route == "/" ? "" : <Footer />}
        {/* <Cursor ref={cursorRef} /> */}
      </RecoilRoot>
    </>
  );
}
