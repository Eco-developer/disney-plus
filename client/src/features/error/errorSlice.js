import { createSlice } from "@reduxjs/toolkit";

const initialState = { hasError: false};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state) => {
      state.hasError = true;
    },
  },
});

export const { setError } = errorSlice.actions;
export const selectError = (state) => state.error.hasError;
export default errorSlice.reducer;