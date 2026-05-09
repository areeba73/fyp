import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// Fetch admin profile
export const fetchAdminProfile = createAsyncThunk(
  'admin/fetchProfile',
  async (adminId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/profile/${adminId}`);
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
      const response = await api.post(`/admin/profile/${adminId}`, profileData);
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
    email: "admin@healthcare.com"
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
  error: null,
  successMessage: null
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.successMessage = null;
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
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
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
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(u => u.id !== action.payload);
        state.successMessage = "User deleted successfully";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Delete Doctor
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = state.doctors.filter(d => d.id !== action.payload);
        state.successMessage = "Doctor deleted successfully";
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch Stats
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update Profile
      .addCase(updateAdminProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAdminProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.adminProfile = { ...state.adminProfile, ...action.payload };
        state.successMessage = "Profile updated successfully";
      })
      .addCase(updateAdminProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, clearSuccess } = adminSlice.actions;
export default adminSlice.reducer;