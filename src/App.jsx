import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Header/Nav";
import SideBar from "./components/SideBar/SideBar";
import MovieList from "./components/Movies/MovieList";
import CartController from "./context/CartController";
import ThemeControlloer from "./context/ThemeControlloer";

const App = () => {
  return (
    <>
      <ThemeControlloer>
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          <CartController>
            <Nav />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <SideBar />
              <MovieList />
            </div>
          </CartController>
        </div>
      </ThemeControlloer>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
