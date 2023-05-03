import React from "react";
import "./Anime.css";

const AnimeQoute = ({ anime }) => {
  return <div className="anime-box">{anime.title}</div>;
};

export default AnimeQoute;
