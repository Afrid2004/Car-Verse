import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("vehicles/fetchData", async () => {
  const response = await axios.get("/data.json");
  const data = await response.data;
  return data;
});

const VehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.vehicles = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.vehicles = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.vehicles = [];
    });
  },
});

export default VehiclesSlice.reducer;
