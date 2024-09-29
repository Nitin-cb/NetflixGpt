import { useDispatch } from 'react-redux';
import { addTopRatedMovies, addUpComingMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';
import { useEffect } from 'react';

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
