import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// --- 1. Signup Thunk ---
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.error);
      return data; 
    } catch (error) {
      return rejectWithValue("Server connection failed!");
    }
  }
);

// --- 2. Login Thunk ---
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      if (!response.ok) return rejectWithValue(data.error);

      // Token ya user data ko localStorage mein save karna taake refresh par data na jaye
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token || ''); 

      return data;
    } catch (error) {
      return rejectWithValue("Login failed! Please check your connection.");
    }
  }
);

// Initial State (LocalStorage se check kar rahe hain taake refresh par user login rahe)
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
    // Iska maqsad ye hai ke jab user page switch kare toh purana error khatam ho jaye
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.role = action.payload.user.role; // Backend se user object mein role aa raha hai
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setError } = authSlice.actions;
export default authSlice.reducer;