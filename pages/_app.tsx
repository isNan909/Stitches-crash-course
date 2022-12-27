import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

import { globalStyles } from "../stitches.config.ts";

const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
