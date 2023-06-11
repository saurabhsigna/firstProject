import "../styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Cursor, { CursorRef } from "../components/animation/Cursor";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const cursorRef = React.useRef<CursorRef>(null);

  React.useEffect(() => {
    router.events.on("routeChangeComplete", progressDone);
    router.events.on("routeChangeError", progressDone);

    return () => {
      router.events.off("routeChangeComplete", progressDone);
      router.events.off("routeChangeError", progressDone);
    };
  }, []);

  const progressDone = () => {
    const { current: cursor } = cursorRef;
    if (cursor) {
      cursor.update();
    }
  };
  return (
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
  );
}
