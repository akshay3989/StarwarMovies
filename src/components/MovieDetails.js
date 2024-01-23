// MovieDetails.js

import React from 'react';

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

const MovieDetails = ({ movie }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
     
      {movie ? (
        <div>
          <h3>{movie.title}</h3>
          <p>Episode: {`${romanize(movie.episode_id)} - ${movie.title}`}</p>
          <p>Director: {movie.director}</p>
          <p>: {movie.opening_crawl}</p>
          
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Select a movie to see details</p>
      )}
    </div>
  );
};

export default MovieDetails;
