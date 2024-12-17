import React from 'react';

const Header = ({ searchTerm, setSearchTerm, searchMovies }) => {
  return (
    <header className="header">
      <h1>Nitflix</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={searchMovies}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
