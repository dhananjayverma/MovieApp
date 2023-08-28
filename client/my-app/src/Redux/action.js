import axios from 'axios';

// Action types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Action creator to fetch movies based on a search query
export const fetchMovies = (query) => {
  console.log(query);
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/movies/search?query=${query}`);
      console.log(response.data);
      const movies = response.data;
      dispatch({ type: FETCH_MOVIES, payload: movies });
    } catch (error) {
      console.error(error);
    }
  };
};

// Action creator to add a movie to favorites
export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

// Action creator to remove a movie from favorites
export const removeFavorite = (imdbID) => ({
  type: REMOVE_FAVORITE,
  payload: imdbID,
});




// import axios from 'axios';

// // Action types
// export const FETCH_MOVIES = 'FETCH_MOVIES';
// export const ADD_FAVORITE = 'ADD_FAVORITE';
// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
// export const ADD_MOVIE = 'ADD_MOVIE'; // Add this new action type

// // Action creator to fetch movies based on a search query
// export const fetchMovies = (query) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/movies/search?query=${query}`);
//       const movies = response.data;
//       dispatch({ type: FETCH_MOVIES, payload: movies });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// // Action creator to add a movie to favorites
// export const addFavorite = (movie) => ({
//   type: ADD_FAVORITE,
//   payload: movie,
// });

// // Action creator to remove a movie from favorites
// export const removeFavorite = (imdbID) => ({
//   type: REMOVE_FAVORITE,
//   payload: imdbID,
// });

// // Action creator to add a new movie
// export const addMovie = (movie) => ({
//   type: ADD_MOVIE,
//   payload: movie,
// });
