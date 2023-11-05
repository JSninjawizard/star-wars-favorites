import React from 'react';


function MovieItem({movie, onMovieSelect }) {
  return (
    
      
        <div style={{ backgroundImage: `url(${movie.image_url})`}} class="movie-item" key={movie.episode_id}>
          <div class="y2" onClick={() => onMovieSelect(movie)}>
            {/* parameter was missing from "onMovieSelect" */}
            View {movie.title}
          </div>
        </div>
    
    
  );
}

export default MovieItem;