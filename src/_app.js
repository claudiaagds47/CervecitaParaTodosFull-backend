import React from "react";
import "@/styles/globals.js";
import "@/styles/Default.js";
import GlobalStyle from "./styles/GlobalStyle";
import morgan from 'morgan';
import authRoutes from './routes/index.js'


 
export default function App({ Component, pageProps }) {
  return (
    <>
     <GlobalStyle />
     <Component {...pageProps} />;
   </>
  );
 }
