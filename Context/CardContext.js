//Context para cards y carrito//
"use client";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { uptime } from "process";
import { cardsArray } from "@/Components/organismos/arrayCards";

//este import no me funciona, lo tuve que declarar aqui
// const cardsArray = [
//   {
//     title: "Cerveza SLVDR",
//     description: "Sour Ale Frutilla & Mango 2,8% abv",
//     imageUrl: "/assets/latanegrayblanca.png",
//     precio: 196,
//     id: "1",
//   },
//   {
//     title: "Cerveza Unidas",
//     description: "Malta de Rio Negro 6,5% abv",
//     imageUrl: "/assets/numen8.png",
//     precio: 100,
//     id: "2",
//   },
//   {
//     title: "Cerveza Baba",
//     description: "Unicamente en la región de la Patagonia 4,8% abv",
//     imageUrl: "/assets/numen2.png",
//     precio: 150,
//     id: "3",
//   },
//   {
//     title: "Cerveza Bombon Asesino",
//     description: "Un trago especial para los asesinos de la cevada 3,8% abv",
//     imageUrl: "/assets/numen3.png",
//     precio: 210,
//     id: "4",
//   },
//   {
//     title: "Cerveza Juici Red",
//     description: "Jugo de frutas naturales malta y cevada 8,8% abv",
//     imageUrl: "/assets/numen6.png",
//     precio: 185,
//     id: "5",
//   },

//   {
//     title: "Cerveza Ocaso",
//     description: "Tomar es una ocasión 5,5% abv",
//     imageUrl: "/assets/numen7.png",
//     precio: 205,
//     id: "6",
//   },

//   {
//     title: "Cerveza Baba",
//     description: "Unicamente en la región de la Patagonia 4,8% abv",
//     imageUrl: "/assets/numen2.png",
//     precio: 150,
//     id: "7",
//   },
//   {
//     title: "Cerveza Bombon Asesino",
//     description: "Un trago especial para los asesinos de la cevada 3,8% abv",
//     imageUrl: "/assets/numen3.png",
//     precio: 210,
//     id: "8",
//   },
//   {
//     title: "Cerveza Juici Red",
//     description: "Jugo de frutas naturales malta y cevada 8,8% abv",
//     imageUrl: "/assets/numen6.png",
//     precio: 185,
//     id: "9",
//   },

//   {
//     title: "Cerveza Ocaso",
//     description: "Tomar es una ocasión 5,5% abv",
//     imageUrl: "/assets/numen7.png",
//     precio: 205,
//     id: "10",
//   },
// ];

export const CardContext = createContext();

// updateQuote();

const shoppingInitialState = {
  cardsArray: [],
  items: [],
};

function shoppingCartReducer(state, action) {
  // console.log(cardsArray);
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = cardsArray.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        title: product.title,
        precio: product.precio,
        quantity: 1,
        imageUrl: product.imageUrl,
        description: product.description,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "READ_STATE") {
    return {
      ...state,
      cardsArray: action.payload.cardsArray,
      items: action.payload.items,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export default function CardContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    shoppingInitialState
  );
  const { cardsArray, items } = shoppingCartState;
  const readState = async () => {
    const ENDPOINT = {
      cardsArray: "http://localhost:5000/cardsArray",
      items: "http://localhost:5000/items",
    };
    const responseProducts = await axios.get(ENDPOINT.cardsArray),
      responseCart = await axios.get(ENDPOINT.items);
    const cardsList = await responseProducts.data,
      itemsList = await responseCart.data;

    // console.log(productsList);
    // console.log(cartItems);
    shoppingCartDispatch({
      type: "READ_STATE",
      payload: {
        cardsArray: cardsList,
        items: itemsList,
      },
    });
  };

  useEffect(() => {
    readState();
  }, []);
  //console.log(shoppingCartState);

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  // useEffect(() => {
  //   updateQuote(shoppingCartDispatch);
  // }, []);

  return <CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>;
}
