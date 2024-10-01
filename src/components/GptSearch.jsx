import { LOGIN_BG } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearrchBar from './GptSearrchBar';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-40 w-full h-full">
        <img className="w-full h-full object-cover" src={LOGIN_BG} alt="" />
      </div>
      <div className="">
        <GptSearrchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
