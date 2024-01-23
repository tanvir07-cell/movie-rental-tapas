import React, { useState } from "react";
import { getImage } from "../../utils/getImage";
import TAG from "../../assets/tag.svg";
import Ratings from "./Ratings";
import MovieModal from "./MovieModal";
import { useCart } from "../../context/CartController";

const MovieCard = ({ cover, title, description, genre, rating, price, id }) => {
  const [openMovie, setOpenMovie] = useState(false);

  // using from context custom hook
  const { cart, addToCart } = useCart();

  const handleOpenMovie = () => {
    setOpenMovie(true);
  };

  // const handleSetMovie = () => {
  //   setMovie({
  //     cover,
  //     title,
  //     description,
  //     genre,
  //     rating,
  //     price,
  //   });

  // };

  return (
    <>
      {openMovie && (
        <MovieModal
          cover={cover}
          title={title}
          description={description}
          genre={genre}
          rating={rating}
          price={price}
          id={id}
          onClose={() => setOpenMovie(false)}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={handleOpenMovie} href="#">
          <img className="w-full object-cover" src={getImage(cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>

            <Ratings rating={rating} />

            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({
                  cover,
                  title,
                  description,
                  genre,
                  rating,
                  price,
                  id,
                });
              }}
            >
              <img src={TAG} alt="tag" />
              <span>{price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
