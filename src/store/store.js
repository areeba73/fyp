// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import emotionReducer from "./slices/emotionSlice";
import adminReducer from './slices/adminSlice';  


export const store = configureStore({
  reducer: {
    auth: authReducer,       
    emotions: emotionReducer, // AI model aur Python backend data ke liye
    admin: adminReducer  // ✅ Add karo
  },
  // Middleware: Ye Firebase ke complex data objects ko handle karne mein madad karta hai
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;

