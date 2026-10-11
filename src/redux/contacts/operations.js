import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

const errorMessage = (e) => e.response?.data?.message ?? e.message;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await api.post('/contacts', contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage(e));
    }
  },
);
