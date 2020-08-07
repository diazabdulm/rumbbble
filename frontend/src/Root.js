import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "reducers/authSlice";

export default function Root({ children }) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  return <Provider store={store}>{children}</Provider>;
}
