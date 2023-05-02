import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
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
      <Footer />
    </RecoilRoot>
  );
}
