import React from 'react'
//import AlertDialog from '@/Components/organismos/AlertDialog';
import ModalIndex from '@/Components/organismos/ModalIndex';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import MainCentro from "../Components/MainCentro";
import Banner from "../Components/Banner";
import CardContextProvider from '../../Context/context';
import CartComponent from '@/Components/CartComponent';




const index = () => {
  return (
    <>
      {/*  
      <ModalIndex />
      <Banner />
      <Navigation />
      <MainCentro />
      <Footer />  */}
      <CardContextProvider>
        <CartComponent/>
      </CardContextProvider>
    </>
  );
}

export default index


















































// import React from "react";
// import Navigation from "../Components/Navigation";
// import Footer from "../Components/Footer";
// import Home from "./Home";
// import Banner from "../Components/Banner";


// const index = () => {
//   return (
//     <>
//       <Banner />
//       <Navigation />
//       <Home />
//       <Footer />
//     </>
//   );
// };

// export default index;


