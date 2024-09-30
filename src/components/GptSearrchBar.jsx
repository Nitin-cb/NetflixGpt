import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';

const GptSearrchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-600 rounded-lg text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearrchBar;
