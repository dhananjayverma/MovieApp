

import { combineReducers } from 'redux';
import { FETCH_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE } from './action';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
      
    case REMOVE_FAVORITE:
      return state.filter((movie) => movie.imdbID !== action.payload);
    default:
      return state;
  }
};


export default combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});










// import { combineReducers } from 'redux';
// import { FETCH_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE } from './action';

// const moviesReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_MOVIES:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const favoritesReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_FAVORITE:
//       return [...state, action.payload];
      
//     case REMOVE_FAVORITE:
//       return state.filter((movie) => movie.imdbID !== action.payload);
//     default:
//       return state;
//   }
// };

// const moviesReducer1 = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_MOVIE':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   movies: moviesReducer,
//   favorites: favoritesReducer,
//   movies1: moviesReducer1, // Include the new moviesReducer1
// });
