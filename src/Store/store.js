import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Slices/counterSlice.js";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
