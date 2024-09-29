import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  //fetch data from tmdb api andupdate store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      Main container
        - Video background
        - Video title 
      Secondary container
        - movie list
          - card 
      */}
    </div>
  );
};

export default Browse;
