import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader, clearAuthHeader } from '../../services/api';

const errorMessage = (e) => e.response?.data?.message ?? e.message;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(errorMessage(e));
  }
});

// Оновлення користувача за збереженим токеном при завантаженні сторінки
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('Немає токена');
    try {
      setAuthHeader(token);
      const { data } = await api.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);
