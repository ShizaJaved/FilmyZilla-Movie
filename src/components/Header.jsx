import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import { MdMovieFilter } from "react-icons/md";
import "./Header.css"
import { RiSearch2Line } from "react-icons/ri";



const Header = () => {
 const [searchTerm,setSearchTerm] = useState("")
 const [inputValue, setInputValue] = useState("");

 function handleSearch(e){
setInputValue(e.target.value)
 }
useEffect(() => {
  setSearchTerm(inputValue);
}, [inputValue]);
 
  return (
    <>
      <div className="header-container">
        <Link className="nav-logo" to="/">
          <span>
            <MdMovieFilter />
          </span>
          <h4>FilmyZilla</h4>
        </Link>

        <ul className="menu">
          <Link to="/movies/popular">Popular</Link>
          <Link to="/movies/top_rated">Top Rated</Link>
          <Link to="/movies/upcoming">Up Coming</Link>
        </ul>

        <div className="nav-input">
          <input
            type="text"
            placeholder="Search a Movie"
            value={inputValue}
            onChange={handleSearch}
          />
            {searchTerm.length > 0 ? (
              <Link to={`/search/${searchTerm}`}>
                <RiSearch2Line style={{ color: "white" }} />
              </Link>
            ) : (
              <Link to="/">
                <RiSearch2Line />
              </Link>
            )}
      
        </div>
      </div>
    </>
  );
}

export default Header