const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const favoritesFilePath = path.join(__dirname, '../data/favorites.json');

// In-memory data structure for favorites
let favorites = [];

// Read initial favorites data from file
try {
  const favoritesData = fs.readFileSync(favoritesFilePath, 'utf-8');
  if (favoritesData.trim() !== '') {
    favorites = JSON.parse(favoritesData);
  }
} catch (error) {
  console.error(error);
}
// Movie search route
router.get('/search', async (req, res) => {
  const searchQuery = req.query.query;

  if (!searchQuery) {
    return res.status(400).json({ error: 'Search query is required.' });
  }

  try {
    const omdbApiKey = 'f3466d63'; // Replace with your actual OMDB API key
    const omdbResponse = await axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchQuery}`);

    if (omdbResponse.data.Error) {
      return res.status(500).json({ error: 'Error fetching movies from OMDB API.' });
    }

    const movies = omdbResponse.data.Search || [];
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
});

// Favorites routes
router.get('/favorites', (req, res) => {
  res.json(favorites);
});


router.post('/favorites', (req, res) => {
  const movie = req.body;

  if (!movie || !movie.imdbID || !movie.Title) {
    return res.status(400).json({ error: 'Invalid movie data. Both imdbID and Title are required.' });
  }

  console.log('Adding movie to favorites:', movie);

  if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
    favorites.push(movie);
    saveFavoritesToFile();
    res.json({ message: 'Movie added to favorites.' });
  } else {
    res.status(400).json({ error: 'Movie already in favorites.' });
  }
});


router.delete('/favorites/:imdbID', (req, res) => {
  const imdbID = req.params.imdbID;
  const index = favorites.findIndex(fav => fav.imdbID === imdbID);

  if (index !== -1) {
    favorites.splice(index, 1);
    saveFavoritesToFile();
    res.json({ message: 'Movie removed from favorites.' });
  } else {
    res.status(404).json({ error: 'Movie not found in favorites.' });
  }
});

// Save favorites to file
function saveFavoritesToFile() {
  fs.writeFileSync(favoritesFilePath, JSON.stringify(favorites, null, 2));
}

module.exports = router;
