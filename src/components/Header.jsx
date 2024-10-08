import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { resetGptData, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    //unsubscribe when compnent unmounts
    return () => unSubscribe();
  }, []);
  const handleGptSearch = () => {
    if (showGptSearch) {
      dispatch(resetGptData()); // Clear the data when going back to home
    }
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" text-white absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center  md:justify-between  flex-col md:flex-row">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="m-2 p-2 bg-black text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" px-4 m-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? 'HomePage' : 'GPT Search'}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="user-icon" />
          <button onClick={handleSignOut} className="font-bold text-white ">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
