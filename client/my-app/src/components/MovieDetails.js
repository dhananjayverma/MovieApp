// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addFavorite, removeFavorite } from '../Redux/action';
// import "../style/MovieDetails.css "

// const MovieDetails = () => {
//   const { id } = useParams();
//   const movie = useSelector(state => state.movies.find(m => m.imdbID === id));
//   const dispatch = useDispatch();

//   const handleFavoriteToggle = () => {
//     if (movie.isFavorite) {
//       dispatch(removeFavorite(movie.imdbID));
//     } else {
//       dispatch(addFavorite(movie));
//     }
//   };

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-details">
//       <h2>{movie.Title}</h2>
//       <p>{movie.Year}</p>
//       <img src={movie.Poster} alt={movie.Title} className='moviePoster'/>
//       <button onClick={handleFavoriteToggle} className='favoriteButton'>
//         {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//       </button>
//       <Link to="/favorites" className='goToFavorites'>Go to Favorites</Link>
//     </div>
//   );
// };

// export default MovieDetails;



import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../Redux/action';
import "../style/MovieDetails.css"; // Import the CSS file

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector(state => state.movies.find(m => m.imdbID === id));
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    if (movie.isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
  <img src={movie.Poster} alt={movie.Title} className="moviePoster" />
  <div className="movie-content">
    <h2>Title: {movie.Title}</h2>
    <p>Year: {movie.Year}</p>
    <p>Type: {movie.Type}</p>
    <button onClick={handleFavoriteToggle} className="favoriteButton">
      {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
    <Link to="/favorites" className="goToFavorites">
      Go to Favorites
    </Link>
  </div>
</div>
  );
};

export default MovieDetails;

