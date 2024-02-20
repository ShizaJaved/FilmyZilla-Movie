import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from './Card'
import "./MovieList.css"

const MovieList = () => {
 const {type} = useParams()
 const [movieDetail, setMovieDetail] = useState([])

const getData = async() =>{
    const respone = await fetch(`https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=84f73ca8aa7f0f95950119a5ca4c867f&language=en-US
`);
const data = await respone.json();
setMovieDetail(data.results)
console.log(data.results)
}

useEffect(() => {
  getData();
}, []);

useEffect(()=>{
    getData()
},[type])
 
 
    return (
    <>
    <div className='card-conatiner'>
            <h2>{(type ? type : "POPULAR").toUpperCase()}</h2>
            
            <div className='card-list'>
{
    movieDetail.map((movie)=>(
        <Link to={`/movie/${movie.id}`}>
      <Card movie={movie} />
        </Link>
    ))
}</div>

    </div>
    </>
  )
}

export default MovieList