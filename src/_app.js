import React from "react";
import "@/styles/globals.js";
import "@/styles/Default.js";
import GlobalStyle from "./styles/GlobalStyle";

// import '@/styles/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
