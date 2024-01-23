import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";
import RING from "../../assets/ring.svg";
import MOON from "../../assets/icons/moon.svg";
import CART from "../../assets/shopping-cart.svg";
import Modal from "../Modal";
import AddToCartModal from "./AddToCartModal";
import { useCart } from "../../context/CartController";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useCart();

  console.log(cart);

  return (
    <>
      {showCart && (
        <Modal>
          <AddToCartModal
            onClose={() => setShowCart(false)}
            showCart={showCart}
          />
        </Modal>
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={LOGO} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={RING} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={MOON} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCart(!showCart)}
              >
                <img src={CART} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
