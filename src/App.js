import React, { useState, useEffect } from 'react';     
import './App.css';
import Header from './Header';
import MovieList from './MovieList';
import GenreSection from './GenreSection';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchedMovies, setSearchedMovies] = useState([]); 
  const [isSearching, setIsSearching] = useState(false); 
  const [moviesByGenre, setMoviesByGenre] = useState({}); 
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance']; 

  const API_KEY = 'af9ef303'; 
  const BASE_URL = 'https://www.omdbapi.com/';

  const fetchMoviesByGenre = async (genre) => {
    const response = await fetch(`${BASE_URL}?s=${genre}&apikey=${API_KEY}`);
    const data = await response.json();
    setMoviesByGenre((prev) => ({
      ...prev,
      [genre]: data.Search || [],
    }));
  };

  const searchMovies = async () => {
    setIsSearching(true);
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    setSearchedMovies(data.Search || []);
  };

  useEffect(() => {
    genres.forEach((genre) => {
      fetchMoviesByGenre(genre);
    });
  }, []); 

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies} />

      {isSearching ? (
        <div className="search-results">
          <MovieList movies={searchedMovies} />
        </div>
      ) : (
        genres.map((genre) => (
          <GenreSection key={genre} genre={genre} moviesByGenre={moviesByGenre} />
        ))
      )}
    </div>
  );
};

export default App;
