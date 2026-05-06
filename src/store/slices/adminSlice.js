import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'admin/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/users');
      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch users");
    }
  }
);

// Fetch all doctors
export const fetchDoctors = createAsyncThunk(
  'admin/fetchDoctors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/doctors');
      return response.data.doctors;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch doctors");
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      await api.delete(`/admin/users/${userId}`);
      return userId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to delete user");
    }
  }
);

// Delete doctor
export const deleteDoctor = createAsyncThunk(
  'admin/deleteDoctor',
  async (doctorId, { rejectWithValue }) => {
    try {
      await api.delete(`/admin/doctors/${doctorId}`);
      return doctorId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to delete doctor");
    }
  }
);

// Fetch admin stats
export const fetchStats = createAsyncThunk(
  'admin/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/stats');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch stats");
    }
  }
);

// Update admin settings
export const updateAdminSettings = createAsyncThunk(
  'admin/updateSettings',
  async (settingsData, { rejectWithValue }) => {
    try {
      const response = await api.post('/admin/settings', settingsData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to update settings");
    }
  }
);

const initialState = {
  users: [],
  doctors: [],
  stats: {
    totalUsers: 0,
    totalDoctors: 0,
    serverHealth: "99.9%",
    databaseLoad: "12%"
  },
  loading: false,
  error: null,
  adminData: {
    name: "Admin",
    email: "admin@healthcare.com",
    password: "Admin@123",
    twoFactor: true,
    notifications: true
  }
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch Doctors
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(u => u.id !== action.payload);
      })
      
      // Delete Doctor
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.doctors = state.doctors.filter(d => d.id !== action.payload);
      })
      
      // Fetch Stats
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      
      // Update Settings
      .addCase(updateAdminSettings.fulfilled, (state, action) => {
        state.adminData = action.payload;
      });
  }
});

export const { clearError, setError } = adminSlice.actions;
export default adminSlice.reducer;