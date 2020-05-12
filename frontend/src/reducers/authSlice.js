import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    error: "",
  },
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signInSuccess, signInFailure } = authSlice.actions;

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get("/auth/current-user");
    const data = await response.data;
    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

export const selectUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
