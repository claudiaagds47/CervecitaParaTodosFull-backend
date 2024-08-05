import React from "react";
import ModalIndex from "@/Components/organismos/ModalIndex";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import MainCentro from "../Components/MainCentro";
import Banner from "../Components/Banner";
import ScrollToTop from "react-scroll-to-top";
import CartComponent from "../Components/CartComponent";
import CardContextProvider from "../../Context/CardContext";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "@/Components/Login";
import Registrarme from "@/Components/organismos/Registrarme";
import { connectDB } from "@/db";
import  express from 'express';
// import router from "@/routes/auth.routes"; 
import morgan from 'morgan';


const app= express();
connectDB();
app.listen (4000, ()=>{
console.log('server on port', 4000 )});
app.use (morgan('dev'));

// app.use ("/api", authRoutes);

// app.use (express.json())


const index = () => {
  return (
    <>
      <CardContextProvider>
        <ModalIndex />
        <ScrollToTop smooth color="#D98504" />
        <Banner />
        <Navigation />
        <MainCentro />
        <Footer />
      </CardContextProvider>
    </>
  );
};

export default index;


