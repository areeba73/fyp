import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// Fetch admin profile
export const fetchAdminProfile = createAsyncThunk(
  'admin/fetchProfile',
  async (adminId, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/profile', {
        headers: {
          'X-Admin-ID': adminId
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch profile");
    }
  }
);

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

// Fetch stats
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

// Update admin profile
export const updateAdminProfile = createAsyncThunk(
  'admin/updateProfile',
  async ({ adminId, profileData }, { rejectWithValue }) => {
    try {
      const response = await api.post('/admin/profile', profileData, {
        headers: {
          'X-Admin-ID': adminId
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to update profile");
    }
  }
);

const initialState = {
  adminProfile: {
    adminId: null,
    name: "Admin",
    email: "admin@healthcare.com",
    twoFactor: false,
    notifications: true
  },
  users: [],
  doctors: [],
  stats: {
    totalUsers: 0,
    totalDoctors: 0,
    serverHealth: "99.9%",
    databaseLoad: "12%"
  },
  loading: false,
  error: null
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Admin Profile
      .addCase(fetchAdminProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.adminProfile = action.payload;
      })
      .addCase(fetchAdminProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch Users
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      
      // Fetch Doctors
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
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
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      
      // Update Profile
      .addCase(updateAdminProfile.fulfilled, (state, action) => {
        state.adminProfile = { ...state.adminProfile, ...action.payload };
      });
  }
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;