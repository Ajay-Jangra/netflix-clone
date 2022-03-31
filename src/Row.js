import React, { useState,useEffect } from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original/";     // it is the url where all the poster will find 
 function Row({title , fetchUrl,isLargeRow}) {
     
     const [movies, setMovies] = useState([]);        //  this is the way you declare a variable  using react hooks  in usestate give it a initial value that is emppty array []   for using useState we can add useState in import react 
     // a  snippt  of code which runs based on spacific condition and variable  after runing the useeffect   movie can be loaded on the app console 
      const [trailerUrl , setTrailerUrl ] = useState("");
    useEffect(() => {                 //  in this comp we use axios   so import axios 
        async function fetchData(){
           const request =await axios.get(fetchUrl);
           // we get this https://api.themoviedb.org/3/foo-bar/ trending / all / week ? api_key = ${API_KEY} & language=en-US
        //    console.log(request.data.results);  
           setMovies(request.data.results)  ;    // what data str we get
           return request;
        }
        fetchData();   
    }, [fetchUrl]);   //  if [] ,  this tell that run ones when the row loads   don't run again     hear fetcthurl is use in this fxn input parameter   becuase  would't render the use effect   it will be must   that combine with async     
    //  console.table(movies);   // due to this all the rows of movie are seprate



    //    creating option of trailer 
    const opts ={
        height: "390",
        width: "100%",
        playerVars:{
            // https://developers.google.com/youtue/player_parameters
            autoplay:1,    
        },
    };

    // handle the trailer 
    const handleClick = (movie) =>{
       if(trailerUrl){
           setTrailerUrl("");
       }
       else{
           movieTrailer(movie?.name|| "")
           .then((url) => {
           // https://www.youtube.com/watch?v=XtMThy8QkqU
           const urlParams =new URLSearchParams (new URL(url).search);
           setTrailerUrl(urlParams.get("v"));
           }).catch(error => console.log(error));
       }
    };

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row_posters">
                  {/* severl row poster (s) */}

                 {movies.map((movie) =>(
                     <img 
                     key ={movie.id} 
                     onClick ={() => handleClick(movie)} 
                     className={`row_poster ${isLargeRow&&"row_posterLarge"}`}  
                     src = {`${base_url}${ 
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt ={movie.name}
                    />
                ))}                                    
            </div>
            {trailerUrl && <Youtube videoId= {trailerUrl} opts = {opts} />
             }
        </div>

    );
}

 export default Row;
