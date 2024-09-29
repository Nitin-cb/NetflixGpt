import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" z-30 bg-black">
        <div className="-mt-60 pl-12 relative">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Top-Rated'} movies={movies.topRatedMovies} />
          <MovieList title={'Upcoming Movies'} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
