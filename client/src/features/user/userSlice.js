import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.userData = action.payload;
    },
    updateUserWatchlist: (state, action) => {
      if (!state.userData.watchlist_items.map(item => item.id).includes(action.payload.id)) {
        state.userData.watchlist_items.push(action.payload);
      } else {
        state.userData.watchlist_items = state.userData.watchlist_items.filter(item => item.id !== action.payload.id)
      }
    },
    setSignOutState: (state) => {
      state.userData = null;
    },
  },
});

export const {
  setUserLoginDetails, 
  updateUserWatchlist,
  setSignOutState,
} = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;