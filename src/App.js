import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    debugger
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  function handleMovieSelect(movie) {
    debugger
    setSelectedMovie(movie);
  }

  return (
    
    
      <div className="App" class="r1 full">
        <MovieDetails movie={selectedMovie} onFavoriteToggle={handleFavorite} favorites={favorites} />
        {/* onFavoriteToggle={handleFavorite} - was missing */}
        <MovieList onMovieSelect={handleMovieSelect}/>
      </div>
    
  );

}

export default App;