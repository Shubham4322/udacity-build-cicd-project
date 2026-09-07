import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.id}</p>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
