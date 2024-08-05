import React from "react";
import "@/styles/globals.js";
import "@/styles/Default.js";
import GlobalStyle from "./styles/GlobalStyle";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

// // const App = express ();
// App.use(morgan('dev'));

// App.use ("/api", authRoutes);

// App.use (express.json())
 
export default function App({ Component, pageProps }) {
  return (
    <>
     <GlobalStyle />
     <Component {...pageProps} />;
   </>
  );
 }
