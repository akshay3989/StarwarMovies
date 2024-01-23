// MovieList.js

import React, { useState } from 'react';
import './MovieList.css';
// const styles = require('./App.block.css'); 
const MovieList = ({ movies, onMovieClick }) => {
  const [sortBy, setSortBy] = useState('episode');
  const [filterText, setFilterText] = useState('');

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const romanize = (num) => {
    const romanNumerals = [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      // Add more as needed
    ];

    return romanNumerals[num - 1] || num;
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'episode') {
        return a.episode_id - b.episode_id;
      } else if (sortBy === 'year') {
        // Assuming release_date is in the format "YYYY-MM-DD"
        return new Date(a.release_date) - new Date(b.release_date);
      }
      return 0;
    });

  return (
    <div className='parentContainer'>
      < div className='filterSort' >
        <label className='sortChange' >
          Sort by:
          <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)} >
            <option value="episode">Episode</option>
            <option value="year">Year</option>
          </select>
        </label>
        <label className='filterChange' >
          Filter by name:
          <input type="text" value={filterText} onChange={handleFilterChange}  />
        </label>
      </div>
    <div className='filterContainer'>
      <ul >
        {filteredMovies.map((movie) => (
          <li key={movie.episode_id} onClick={() => onMovieClick(movie)} >
           <p>Episode  {`${romanize(movie.episode_id)} - ${movie.title}`}</p> 
           <p>{movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
        </div>
  );
};



  


export default MovieList;
