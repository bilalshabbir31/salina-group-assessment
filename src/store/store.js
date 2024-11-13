import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

const store = configureStore({
  reducer: {
    formData: userReducer,
  },
});

export default store;
