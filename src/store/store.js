import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import emotionReducer from "./slices/emotionSlice";
import adminReducer from './slices/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    emotions: emotionReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Firebase objects ke liye
    }),
  // ✅ Dev tools support
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;