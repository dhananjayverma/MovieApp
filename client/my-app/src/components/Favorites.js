import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../Redux/action';
import '../style/Favorites.css'; 

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (imdbID) => {
    dispatch(removeFavorite(imdbID));
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-heading">Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite movies yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(movie => (
            <li key={movie.imdbID} className="favorite-item">
              <div className="movie-details">
                <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-poster" />
                <span className="movie-title">
                  {movie.Title} ({movie.Year})
                </span>
              </div>
              <button onClick={() => handleRemoveFavorite(movie.imdbID)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
