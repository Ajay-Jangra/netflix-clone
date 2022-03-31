//  it is just a module
//import React from 'react';

const API_KEY = "4d776e7feed1440b3cabc9dfa49e8acd";

// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4d776e7feed1440b3cabc9dfa49e8acd&page=1";

// const THEATRE_API = "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=4d776e7feed1440b3cabc9dfa49e8acd&page=1";



// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=4d776e7feed1440b3cabc9dfa49e8acd&query=";



const requests = {

     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,

     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;