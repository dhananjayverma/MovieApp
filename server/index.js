const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
// Include routes
const moviesRoute = require('./routes/movies');
app.use('/api/movies', moviesRoute);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// http://localhost:5000/api/movies/search?query=avengers