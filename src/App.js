import React from 'react';
import './App.css';
import './Nav.css';
import Row from "./Row";
 
import requests from "./Requests" ;
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <div className="App">

        {/* navbar */}
        <Nav />

        {/* banner */}

       <Banner/>
       
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <footer>
        <h1>Footer</h1>
          <div className="footer-about-dev">
            <p>Devloper : Ajay Jangra</p>
            <p>Devlope only for project perspective </p>
            <p><a target="blank" href="https://www.linkedin.com/in/ajay-jangra-376ba1202/">Linked In</a></p>
          </div>
      </footer>
    </div>
  );
}

export default App;
