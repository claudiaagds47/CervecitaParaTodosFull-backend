import React from 'react'
// import AlertDialog from '@/Components/organismos/AlertDialog';
import ModalIndex from '@/Components/organismos/ModalIndex';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Home from "./Home";
import Banner from "../Components/Banner";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";





const index = () => {
  return (
    <>
      <ModalIndex />
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


