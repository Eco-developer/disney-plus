import { 
	configureStore, 
	getDefaultMiddleware
} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import seriesReducer from '../features/series/seriesSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    series: seriesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
