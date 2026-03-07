import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("vehicles/fetchData", async () => {
  const response = await axios.get("/data.json");
  return response.data;
});

const VehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.vehicles = [];
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vehicles = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.vehicles = [];
    });
  },
});

export default VehiclesSlice.reducer;
