//Context para cards y carrito//
"use client";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { uptime } from "process";
import { cardsArray } from "@/Components/organismos/arrayCards";

export const CardContext = createContext();

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
