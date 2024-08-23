import React from "react";
import ModalIndex from "@/Components/organismos/ModalIndex";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import MainCentro from "../Components/MainCentro";
import Banner from "../Components/Banner";
import ScrollToTop from "react-scroll-to-top";
import CartComponent from "../Components/CartComponent";
import CardContextProvider from "../../Context/CardContext";
import Login from "@/Components/Login";
import Registrarme from "@/Components/organismos/Registrarme";
import server from "../../Backend/server/server";
import { connectDb } from "../../Backend/dbMongo/dbMongo";

connectDb();
server.listen(4000)
 console.log("servidor corriendo en puerto 4000",4000)


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


