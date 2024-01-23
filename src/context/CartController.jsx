import React, { useContext, useState } from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  setCart: () => {},
});

const CartController = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    if (cart.find((item) => item.id === movie.id)) {
      alert(`${movie.title} already in cart`);
    } else {
      setCart([...cart, movie]);
    }
  };

  const value = { cart, addToCart, setCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartController;
