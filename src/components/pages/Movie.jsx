import React, { useEffect, useState } from 'react'
import{ useParams } from 'react-router-dom'
import MovieDetail from '../MovieDetail';


const Movie = () => {
   
const { id } = useParams();
const [singleMovie, setSingleMovie] = useState({});

const getData = async () =>{
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id
      }?api_key=84f73ca8aa7f0f95950119a5ca4c867f&language=en-US`
    );
    const data = await response.json();
    // setSingleMovie(data)
    console.log(data);
setSingleMovie(data);
}
useEffect(()=>{
    getData();
},[id])


  return (
    <>
 
  
      {
      
       <MovieDetail movie={singleMovie}/>

      }

    </>
  );
}

export default Movie