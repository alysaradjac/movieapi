import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div key={movie.imdbID} className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}
        alt={movie.Title}
        className="movie-poster"
      />
      <h3 className="movie-title">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
