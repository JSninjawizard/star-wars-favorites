import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        let temp  = data.map(obj => ({ ...obj, image_url: '' }));
        data[0].image_url = 'http://tidalwave.agency/wp-content/uploads/2016/09/star-wars-a-new-hope-episode-iv-original-poster-art-1977-style-c-tom-chantrell-1024x683.jpg';
        data[1].image_url = 'https://m.media-amazon.com/images/I/61mVAe9vAtL._AC_SL1000_.jpg';
        data[2].image_url = 'https://m.media-amazon.com/images/I/61c7U8DqV3L._AC_SL1000_.jpg';
        data[3].image_url = 'https://m.media-amazon.com/images/I/81gzXmcpM6L._AC_SL1500_.jpg';
        data[4].image_url = 'https://m.media-amazon.com/images/I/81LiyMa+m2L._AC_SL1500_.jpg';
        data[5].image_url = 'https://m.media-amazon.com/images/I/71WgjTKJ00L._AC_SL1334_.jpg';
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div class="movie-list">
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        )}
    </div>
);
}

export default MovieList;
