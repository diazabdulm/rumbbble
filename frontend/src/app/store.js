import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';

import authReducer from "../reducers/authSlice";
import projectsReducer from "../reducers/projectsSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
  },
});
