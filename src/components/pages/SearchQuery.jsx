import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Card from '../Card';
import { Link } from 'react-router-dom';


const SearchQuery = () => {
const { query } = useParams();
 const apiKey = `84f73ca8aa7f0f95950119a5ca4c867f`;
 const [MovieDetail, setMovieDetail] = useState([]);


 const getData = async () => {
   const response = await fetch(
     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query};`
   );
   const data = await response.json();
   console.log(data.results);
   setMovieDetail(data.results);
 };

  useEffect(() => {
    getData()
  }, [query]);


  return (
    <>

        <div className="card-list">
          {MovieDetail.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          ))}
        </div>

    </>
  );
}

export default SearchQuery