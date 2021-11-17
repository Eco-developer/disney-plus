import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setSeriesGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setSeriesGenres } = seriesSlice.actions;

export const selectSeriesGenres = (state) => state.series.genres;

export default seriesSlice.reducer;