import React, { useState , useEffect } from 'react'
import axios from "./axios"
import './Row.css';
import YouTube from "react-youtube";

function Row({title , fetchUrl  , isLargeRow}) {
const[movies , setmovies] = useState([]);
// snippets of code which runs based on a specific condn

const baseUrl = "https://image.tmdb.org/t/p/original/";
useEffect(() => {
  // if [], run once when row loads . and dont run again
    // if [movies] , runs everytime whenever movie changes
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results);
        
        setmovies(request.data.results);
        return request;
    }
    fetchData();
    
  }, [fetchUrl]);
  // console.log(movies);
const opts = {
  height : "390",
  width: "100%",
  playerVars:{
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
  return (
    <div className='row'>
        
        <h2>{title}</h2>
        <div className="row_posters">
        {/* row_posters */}
        {movies.map(movie => (
           <img
           key={movie.id} // makes faster scroll 
           className = {`row_poster ${isLargeRow && "row_posterLarge" }`}
            src = {`${baseUrl}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/> 
        ))}
<YouTube videoId = {trailerUrl} opts = {opts} />

        </div>
  
      {/* container -> posters */}
    </div>
  )
}

export default Row
