import { configureStore } from "@reduxjs/toolkit";
import AppartmentReducer from "./Slices/AppartmentSlice";
export const store = configureStore({
  reducer: {
    appartment: AppartmentReducer,
    // services: AppartmentReducer,
  },
});
