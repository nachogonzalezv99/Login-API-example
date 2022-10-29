import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (input) => {
    const { data } = await axios.post(`https://reqres.in/api/login`, input);
    return data;
});

const initialState = {
  status: null,
  token: localStorage.getItem('token')
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    logout: (state)=>{
        state.status='succeded'
        state.token = null
        localStorage.removeItem('token');
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {logout} = authSlice.actions

export default authSlice.reducer;
