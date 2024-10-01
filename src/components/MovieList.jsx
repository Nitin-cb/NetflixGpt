import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="px-6 text-white relative">
      <h1 className="text-lg md:text-3xl font-bold py-4">{title}</h1>
      <div className="flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-gray-800 p-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(50%)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Movie List Container */}
        <div className="flex overflow-x-scroll no-scrollbar" ref={scrollRef}>
          <div className="flex space-x-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-gray-800 p-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(50%)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
