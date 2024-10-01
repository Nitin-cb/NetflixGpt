import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    resetGptData: (state) => {
      state.movieResults = null;
      state.movieNames = null;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult, resetGptData } =
  gptSlice.actions;

export default gptSlice.reducer;
