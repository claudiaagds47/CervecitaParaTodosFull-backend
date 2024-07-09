import React from 'react'
// import AlertDialog from '@/Components/organismos/AlertDialog';
import ModalIndex from '@/Components/organismos/ModalIndex';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Home from "./Home";
import Banner from "../Components/Banner";
import ScrollToTop from "react-scroll-to-top";





const index = () => {
  return (
    <>
      <ModalIndex />
      <ScrollToTop smooth color="#D98504" />
      <Banner />
      <Navigation />
      <Home />
      <Footer />
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


