import React from "react";
import { getAllMovies } from "../../utils/data";
import MovieCard from "./MovieCard";

const MOVIES = getAllMovies();

const MovieList = () => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {MOVIES.map(
          ({ id, cover, title, description, genre, rating, price }) => (
            <MovieCard
              key={id}
              title={title}
              cover={cover}
              description={description}
              genre={genre}
              rating={rating}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MovieList;
