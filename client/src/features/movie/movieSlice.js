import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setMovieGenres } = movieSlice.actions;

export const selectMovieGenres = (state) => state.movie.genres;


export default movieSlice.reducer;
