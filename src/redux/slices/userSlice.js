import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth/loginServices';
import signUpService from '../../services/auth/signupServices';

// Async thunk for logging in
export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkAPI) => {
  try {
    const response = await authService.login(payload);
    // Store token and role in localStorage (if needed)
    localStorage.setItem('token', response.token);
    localStorage.setItem('role', response.user.role);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Async thunk for signing up
export const signUpUser = createAsyncThunk('user/signUpUser', async (payload, thunkAPI) => {
  try {
    const response = await signUpService(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || 'Guest',
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      state.token = null;
      state.role = 'Guest';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.role = action.payload.user.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
