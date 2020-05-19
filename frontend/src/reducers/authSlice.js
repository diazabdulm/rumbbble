import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    error: "",
  },
  reducers: {
    setUserSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserSuccess, setUserFailure } = authSlice.actions;

export const fetchUser = () => async (dispatch) => {
  try {
    const { data: user } = await axios.get("/auth/current-user");
    dispatch(setUserSuccess(user));
  } catch (error) {
    dispatch(setUserFailure(error));
  }
};

export const selectUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
