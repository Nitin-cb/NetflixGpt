import { LOGIN_BG } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearrchBar from './GptSearrchBar';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-40 ">
        <img src={LOGIN_BG} alt="" />
      </div>
      <GptSearrchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
