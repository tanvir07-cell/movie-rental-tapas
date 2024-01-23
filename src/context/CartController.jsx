import React, { useContext, useState } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
});

const CartController = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie, e) => {
    setCart([...cart, movie]);
  };

  const value = { cart, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartController;
