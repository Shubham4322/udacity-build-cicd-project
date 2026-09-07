import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
