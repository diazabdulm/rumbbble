import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export const fetchProjects = () => async (dispatch) => {
  try {
    const { data: projects } = await axios.get("/posts");
    dispatch(setProjects(projects));
  } catch (error) {
    throw Error(error);
  }
};

export const createProject = (postData) => async (dispatch) => {
  try {
    await axios.post("/posts", postData);
    dispatch(fetchProjects());
  } catch (error) {
    throw Error(error);
  }
};

export default projectsSlice.reducer;
