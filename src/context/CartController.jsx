import React, { useContext, useReducer, useState } from "react";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

// const CartContext = React.createContext({
//   cart: [],
//   addToCart: () => { },
//   setCart: () => { },
// });

const CartContext = React.createContext({
  state: { cart: [] },
  addToCart: () => { },
  dispatch: () => { },
})


const CartController = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] })

  const addToCart = (movie) => {
    if (state.cart.find(item => item.id === movie.id)) {
      alert(`${movie.title} already in cart`)
    }
    else {
      dispatch({ type: "ADD_TO_CART", payload: movie });
    }
  };

  const value = { state, addToCart, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartController;
