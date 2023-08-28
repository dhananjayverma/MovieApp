
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import MovieCard from './MovieCard';
// import "../style/MovieList.css";

// const MovieList = () => {
//   const movies = useSelector(state => state.movies);
//   const [sortOption, setSortOption] = useState("title");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 10; // Number of movies to display per page

//   let sortedMovies = [...movies];

//   if (sortOption === 'title') {
//     sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
//   } else if (sortOption === 'year') {
//     sortedMovies.sort((a, b) => a.Year.localeCompare(b.Year));
//   }

//   if (sortOrder === 'desc') {
//     sortedMovies.reverse();
//   }

//   // Calculate the indexes of movies to display on the current page
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

//   return (
//     <div>
//       <div className="controls">
//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="title">Sort by Title</option>
//           <option value="year">Sort by Year</option>
//         </select>
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>
//       <div className="movie-list">
//         {currentMovies.map((movie) => (
//           <MovieCard key={movie.imdbID} movie={movie} />
//         ))}
//       </div>
//       <div className="pagination">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={indexOfLastMovie >= sortedMovies.length}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieList;



import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import "../style/MovieList.css";

const MovieList = () => {
  const movies = useSelector(state => state.movies);
  const [sortOption, setSortOption] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage =6; // Number of movies to display per page

  let sortedMovies = [...movies];

  if (sortOption === 'title') {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortOption === 'year') {
    sortedMovies.sort((a, b) => a.Year.localeCompare(b.Year));
  }

  if (sortOrder === 'desc') {
    sortedMovies.reverse();
  }

  // Calculate the indexes of movies to display on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <div className="controls">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="movie-list">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastMovie >= sortedMovies.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
