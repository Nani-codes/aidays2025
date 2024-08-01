import { AppProps } from "next/app";
import React from "react";
import NextNProgress from "nextjs-progressbar";

import "styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
