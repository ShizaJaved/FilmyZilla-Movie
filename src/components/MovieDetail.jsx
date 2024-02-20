import React from 'react'

const MovieDetail = ({movie}) => {
  const {
    backdrop_path,
    poster_path,
    original_title,
    runtime,
    release_date,
    vote_average,
    status,
  } = movie;
  
  
  
  
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
        />
        <h2>{original_title}</h2>
        <p>Runtime: {runtime} minutes</p>
        <p>Release Date: {release_date}</p>
        <p>Vote Average: {vote_average}</p>
        <p>Status: {status}</p>
      </>
    );
}

export default MovieDetail