import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Anime from "./components/Anime";
import "./App.css";

function App() {
  const [anime, setAnime] = useState([]);

  return (
    <div className="App">
      <Header text="Search Anime By Ranking" />
      <div className="search-bar-container">
        <SearchBar setAnime={setAnime} />
        <Anime anime={anime} />
      </div>
    </div>
  );
}

export default App;
