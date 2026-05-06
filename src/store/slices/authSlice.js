import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// --- 1. User Signup Thunk ---
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Endpoint: /user/signup (url_prefix already adds /user)
      const response = await api.post('/user/signup', userData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Server connection failed!");
    }
  }
);

// --- 2. User Login Thunk ---
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      // Endpoint: /user/login
      const response = await api.post('/user/login', credentials);
      const data = response.data;
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token || ''); 
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Login failed!");
    }
  }
);

// --- 3. Doctor Signup Thunk ---
export const registerDoctor = createAsyncThunk(
  'auth/registerDoctor',
  async (doctorData, { rejectWithValue }) => {
    try {
      // Endpoint: /doctor/signup
      const response = await api.post('/doctor/signup', doctorData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Doctor registration failed!");
    }
  }
);

// --- 4. Doctor Login Thunk ---
export const loginDoctor = createAsyncThunk(
  'auth/loginDoctor',
  async (credentials, { rejectWithValue }) => {
    try {
      // Endpoint: /doctor/login
      const response = await api.post('/doctor/login', credentials);
      const data = response.data;
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token || ''); 
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Doctor login failed!");
    }
  }
);

const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: savedUser || null,
  role: savedUser?.role || null,
  isAuthenticated: !!savedUser,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register (Common for all)
      .addMatcher(
        (action) => action.type.endsWith('/pending') && action.type.includes('register'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled') && action.type.includes('register'),
        (state) => {
          state.loading = false;
        }
      )
      // Login (Common for all)
      .addMatcher(
        (action) => action.type.endsWith('/pending') && action.type.includes('login'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled') && action.type.includes('login'),
        (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.role = action.payload.user.role; 
          state.error = null;
        }
      )
      // Generic Rejected Case
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { logout, clearError, setError } = authSlice.actions;
export default authSlice.reducer;