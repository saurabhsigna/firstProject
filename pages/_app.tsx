import "../styles/globals.css";
import type { AppProps } from "next/app";
import {RecoilRoot} from 'recoil'
import Navbar from "../components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
    </RecoilRoot>
  );
}
