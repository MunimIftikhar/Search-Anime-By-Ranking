import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setAnime }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchData = (value) => {
    const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${value}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6e7a192674msh0aedf758788c709p172591jsnfb0664f29f8a",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };
    console.log(value);
    fetch(url, options)
      .then((response) => response.json())
      .then((anime) => {
        setAnime(anime);
      });
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callAPI = (e) => {
    fetchData(searchValue);
    // resetInputField();
  };

  return (
    <div className="input-wrapper">
      <input
        className="search-bar-input"
        placeholder="Type Rank Number"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <input
        className="submit-button"
        onClick={callAPI}
        type="submit"
        value="SEARCH"
      />
    </div>
  );
};

export default SearchBar;
