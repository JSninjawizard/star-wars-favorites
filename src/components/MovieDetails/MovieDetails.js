import React from 'react';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    return (
      <div style={{ backgroundImage: `url(${movie.image_url})` }} class="test">
        <div class="t1">
          <h2>{movie.title}</h2>
        </div>
        <button class="b1" onClick={() => onFavoriteToggle(movie)}>
          {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Dislike" : "Like"}
        </button>
        <p><strong>Episode:</strong> {movie.episode_id}</p>
      </div>
    );
  }

export default MovieDetails;