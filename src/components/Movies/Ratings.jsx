import React from "react";
import STAR from "../../assets/star.svg";

const Ratings = ({ rating }) => {
  const ratings = Array(rating).fill(STAR);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {ratings.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="ratings" />
      ))}
    </div>
  );
};

export default Ratings;
