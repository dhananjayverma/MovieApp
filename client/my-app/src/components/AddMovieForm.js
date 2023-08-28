// AddMovieForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddMovieForm = () => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState({ Title: '', Year: '' ,Type:''});

  const handleAddMovie = () => {
    if (newMovie.Title && newMovie.Year) {
      dispatch({ type: 'ADD_MOVIE', payload: newMovie });
      setNewMovie({ Title: '', Year: '' ,Type:''});
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Title"
        value={newMovie.Title}
        onChange={(e) => setNewMovie({ ...newMovie, Title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Year"
        value={newMovie.Year}
        onChange={(e) => setNewMovie({ ...newMovie, Year: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type"
        value={newMovie.Year}
        onChange={(e) => setNewMovie({ ...newMovie, Type: e.target.value })}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovieForm;
