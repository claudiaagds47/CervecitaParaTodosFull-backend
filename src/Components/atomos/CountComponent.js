import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { CardContext } from "../../../Context/CardContext";

export default function CountComponent({ id, precios }) {
  const { items, updateItemQuantity, addItemToCart } = useContext(CardContext);
  const qty = items.find((item) => item.id === id)?.quantity;
  const counter = qty ? qty : 0;

  function handleMin() {
    if (counter > 0) {
      updateItemQuantity(id, -1);
    }
    console.log(items);
  }

  function handlePlus() {
    if (counter === 0) {
      addItemToCart(id);
    } else {
      updateItemQuantity(id, 1);
    }
    console.log(items);
  }

  return (
    <div style={estilos.counter}>
      <div style={estilos.buttonContainer}>
        <Button
          variant="outlined"
          sx={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderColor: "#57ACD0",
            borderWidth: "2px",
            color: "#57ACD0",
            "&:hover": {
              borderColor: "#57ACD0",
              borderWidth: "2px",
              backgroundColor: "rgba(87, 172, 208, 0.3)",
            },
          }}
          onClick={handleMin}
        >
          -
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            borderColor: "#57ACD0",
            borderWidth: "2px",
            color: "#57ACD0",
            "&:hover": {
              borderColor: "#57ACD0",
              borderWidth: "2px",
              backgroundColor: "rgba(87, 172, 208, 0.3)",
            },
          }}
          onClick={handlePlus}
        >
          +
        </Button>
        <p style={estilos.count}>{counter}</p>
      </div>
      <div>
        <p style={estilos.precio}>$ {precios * counter}</p>
      </div>
    </div>
  );
}

const estilos = {
  counter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: "8px",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: '#000000',
    borderRadius: "10px 10px 10px 10px",
  },
  button: {
    minWidth: "30px",
    minHeight: "30px",
    fontSize: "18px",
    flex: "0 0 auto",
    border: "1px solid #ffffff",
  },
  buttonLeft: {
    marginRight: "5px",
  },
  count: {
    margin: "0 7px",
    fontSize: "18px",
    textAlign: "center",
  },
  precio: {
    fontSize: "18px",
    margin: "0 7px",
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
};
