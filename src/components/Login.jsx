import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_BG, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //sign in signup
    if (!isSignInForm) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        // name.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={LOGIN_BG} alt="" />
      </div>
      {/* form details */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute text-white p-12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? ' New to Netflix? Sign Up Now'
            : 'Already registerd? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
