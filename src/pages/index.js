import React from 'react'
//import AlertDialog from '@/Components/organismos/AlertDialog';
import ModalIndex from '@/Components/organismos/ModalIndex';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import MainCentro from "../Components/MainCentro";
import Banner from "../Components/Banner";
import ScrollToTop from "react-scroll-to-top";


const index = () => {
  return (
    <>
      <ModalIndex />
      <ScrollToTop smooth color="#D98504" />
      <Banner />
      <Navigation />
      <MainCentro />
      <Footer />  
    </>
  )
}

export default index
      

    





















































