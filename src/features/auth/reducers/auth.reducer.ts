/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthUser, IReduxAddAuthUser } from '../interfaces/auth.interface';
import { initialAuthUserValues } from 'src/shared/utils/static-data';

const initialValue: IAuthUser = initialAuthUserValues as IAuthUser;

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
  const response = await axios.get('http://localhost:4000/api/gateway/v1/auth/currentuser', {
    withCredentials: true,
  });
  return response.data.user;
});

const authSlice: Slice = createSlice({
  name: 'auth',
  initialState: {
    user: initialValue,
    status: 'idle',
  },
  reducers: {
    addAuthUser: (state, action: IReduxAddAuthUser) => {
      const { authInfo } = action.payload;
      state.user = { ...authInfo } as unknown as IAuthUser;
    },
    clearAuthUser: (state) => {
      state.user = initialAuthUserValues;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addAuthUser, clearAuthUser } = authSlice.actions;

export default authSlice.reducer;
