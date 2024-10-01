import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstant';
import { useRef } from 'react';
import { API_OPTION } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import genAI from '../utils/geminiSlice';

const GptSearrchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    // make an api call to gpt api and get movie result
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt =
      'Act as a movie recommendation system and suggest some movies for the query :' +
      searchText.current.value +
      'Only give me names of 5 movies, comma seperated ,like the example results given ahead.Example result:Gadar,Sholay,Don,Kalki,Terminator';

    const result = await model.generateContent(prompt);
    if (!result.response.text()) {
      console.log('its an error');
    }
    const gptMovies = result.response.text().split(',');

    // for each mocvie i will search tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[30%] md:p-0 md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-600 rounded-lg text-white"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearrchBar;
