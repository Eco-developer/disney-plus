import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {name: jose},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.userData = action.payload;
    },

    setSignOutState: (state) => {
      state.userData = null;
    },
  },
});

export const {
  setUserLoginDetails, 
  setSignOutState 
} = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;