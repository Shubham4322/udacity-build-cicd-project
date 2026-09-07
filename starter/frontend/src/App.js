import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000'}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.movies || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MovieList movies={movies} />
      </header>
    </div>
  );
}

export default App;
