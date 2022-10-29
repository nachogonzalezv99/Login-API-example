import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (currentPage) => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${currentPage}`
    );
    return data;
  }
);
export const getSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (userId) => {
    const { data } = await axios.get(`https://reqres.in/api/users/${userId}`);
    return data;
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    const { data } = await axios.delete(
      `https://reqres.in/api/users/${userId}`
    );
    return data;
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({userId, input}) => {
    const data = await axios.put(`https://reqres.in/api/users/${userId}`, input);
    return data;
  }
);

const initialState = {
  status: null,
  users: [],
  user: {},
  totalPages: 1,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.users = action.payload.data;
      state.total_pages = action.payload.total_pages;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getSingleUser.pending]: (state) => {
      state.status = "loading";
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.user = action.payload.data;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [deleteUser.pending]: (state) => {
      state.status = "loading";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "succeded";
    },
    [deleteUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateUser.pending]: (state) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.user = {...state.user, ...action.payload.data}
    },
    [updateUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
