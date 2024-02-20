import React from 'react'
import "./Home.css"
import { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineStar } from "react-icons/md";

import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';

const Home = () => {

  const [movieData, setMovieData] = useState([])

const getData = async() =>{
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=84f73ca8aa7f0f95950119a5ca4c867f`
  );
  const data = await response.json();
  setMovieData(data.results)
  console.log(data.results)
}

useEffect(()=>{
getData();

},[])


  return (
    <>
      <div className="home-container">
        <div className="top">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
          >
            {movieData.map((movie) => (
              <Link to={`/movie/${movie.id}`} >
              <div className="background">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />

                <div className="bg-overlay">
                  <div className="left">
                    <h1>{movie.original_title}</h1>

                    <div className="bg-details">
                      <h3>{movie.release_date}</h3>
                      <div className="bg-rating">
                        {movie.vote_average}
                        <MdOutlineStar />
                      </div>
                    </div>
                    
                     <p>{movie.overview.slice(0,100)+"..."}</p>
                  </div>

                  <div className="right">
                  
                    <div className='right-img'>
                     <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.poster_path
                      }`}
                    />
                    </div>

                  </div>
              
                </div>
              </div>
              </Link>
            ))}
          </Carousel>
        </div>

        <div className="bottom"><MovieList /></div>

      </div>
    </>
  );
}

export default Home