import React from 'react';
import MovieList from './MovieList';

const GenreSection = ({ genre, moviesByGenre }) => {
  return (
    <div key={genre} className="genre-section">
      <h2 className="genre-title">{genre}</h2>
      <MovieList movies={moviesByGenre[genre] || []} />
    </div>
  );
};

export default GenreSection;
