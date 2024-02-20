import React from "react";
import './Card.css'
const Card = ({ movie }) => {
  return (
    <>
      <div className="cards"> 
       <div className="card-img">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path || ""}`}
          alt={movie?.title || "Movie Poster"}
        /></div>
        <div className="card-detail">
 <h5>{movie.original_title}</h5>
<h4>{movie.release_date}</h4>
        </div>
       

      </div>

    </>
  );
};

export default Card;
