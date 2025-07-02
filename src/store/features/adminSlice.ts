import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AdminState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const autoLogin = createAsyncThunk(
  'admin/autoLogin',
  async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    return token;
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(autoLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(autoLogin.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(autoLogin.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.error.message || 'Auto login failed';
      });
  },
});

export const { setAuthenticated, clearError } = adminSlice.actions;
export default adminSlice.reducer; 