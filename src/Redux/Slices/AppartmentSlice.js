import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// for home
export const fetchAppartment = createAsyncThunk(
  "appartment/fetchAppartment",
  async () => {
    const response = await fetch(
      "https://guarded-retreat-48750.herokuapp.com/homeService"
    ).then((res) => res.json());
    return response;
  }
);
// for appartment services
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetch(
      "https://guarded-retreat-48750.herokuapp.com/services"
    ).then((res) => res.json());
    return response;
  }
);
const AppartmentSlice = createSlice({
  name: "appartment",
  initialState: {
    discover: [],
    services: [],
    finishedList: [],
  },
  extraReducers: (builder) => {
    // for home
    builder.addCase(fetchAppartment.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
    // for appartment services
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});
export default AppartmentSlice.reducer;
