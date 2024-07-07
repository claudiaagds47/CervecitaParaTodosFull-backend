import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Suscribirse from "./Suscribirse";
import CustomizedDialogs from "./Exito";
import Suscribir from "./Exito";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Contacto() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlin 0" onClick={handleClickOpen}>
        Contacto
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>Nombre y Apellido</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="Fullname"
            name="Fullname"
            label="Fullname"
            type="Fullname"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Correo electronico</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <MultilineTextFields />
        <DialogActions>
          <Button onClick={handleClose}>Enviar</Button>

          <DialogContentText></DialogContentText>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={4}
        />
      </div>
    </Box>
  );
}

// import React from 'react'
// import Navigation from '@/components/Navigation'

// const Contactanos = () => {
//   return (
//     <>
//       <Navigation/>
//     </>
//   )
// }

// export default Contactanos
