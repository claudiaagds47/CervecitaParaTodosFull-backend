import React from 'react'
import CardContextProvider from '../../Context/context';
import CartComponent from '@/Components/CartComponent';
import Banner from "../Components/Banner";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";


const TiendaOnLine = () => {
  return (
    
    <>
      <Banner />
      <Navigation />
      
      <CardContextProvider/>
        <CartComponent/>
      <CardContextProvider/>
      
      <Footer />
    </>
    
  );
}

export default TiendaOnLine