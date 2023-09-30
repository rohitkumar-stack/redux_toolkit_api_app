
import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slices/photoSlice';

const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});

export default store;
