import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "./atomos/Button";

export default function Registrarme() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonComponent

        title="Register"
        variant="outlined"
        textColor="primary"
        borderColor="succes"
        sx={{width: "100px", marginLeft: "10px", marginRight: "10px" }}
        rounded={true}
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registrarme</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingrese su correo electronico</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Ingrese su contraseña</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Repetir Contraseña</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          Recordarme
          <Checkboxes></Checkboxes>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Registrar</Button>
          <DialogContentText></DialogContentText>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
    </div>
  );
}
