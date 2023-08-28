// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchMovies } from '../Redux/action';
// import _ from 'lodash';
// import "../style/SearchBar.css"
// import MovieList from './MovieList';

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     const newQuery = event.target.value;
//     setQuery(newQuery);
//     debounceFetchMovies(newQuery);
//   };

//   const debounceFetchMovies = _.debounce((query) => {
//     dispatch(fetchMovies(query));
//   }, 3000);

//   return (
//     <div className="search-bar">
//       <h1>Movie Search App</h1>
//        <input
//         type="text"
//         placeholder="Search for movies..."
//         value={query}
//         onChange={handleInputChange}
//       />
//     <MovieList/>
//     </div>
//   );
// };

// export default SearchBar;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/action';
import "../style/SearchBar.css"
import MovieList from './MovieList';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  let debounceTimer;

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchMoviesWithDebounce(newQuery);
    }, 3000);
  };

  const fetchMoviesWithDebounce = (query) => {
    dispatch(fetchMovies(query));
  };

  return (
    <div className="search-bar">
      <h1>Movie Search App</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleInputChange}
      />
      <MovieList/>
    </div>
  );
};

export default SearchBar;
