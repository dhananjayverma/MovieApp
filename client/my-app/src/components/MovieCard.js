import React from 'react';
import { Link } from 'react-router-dom';
import "../style/MovieCard.css";

const MovieCard = ({ movie }) => {
 return (
    <div className="movie-card">
       <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-title">{movie.Title}</div>
      <div className="movie-year">{movie.Year}</div>
      <Link to={`/details/${movie.imdbID}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
