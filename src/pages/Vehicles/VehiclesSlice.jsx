import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addCartStore,
  getCartStore,
  removeCartstore,
} from "../../utils/cartStoreDB";

export const fetchData = createAsyncThunk("vehicles/fetchData", async () => {
  const response = await axios.get("/data.json");
  return response.data;
});

const VehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    cartList: getCartStore(),
    isLoading: false,
  },
  reducers: {
    addCart: (state, action) => {
      const carid = action.payload;
      const isExistCart = state.cartList.includes(carid);
      if (!isExistCart) {
        state.cartList.push(carid);
        addCartStore(carid);
      }
    },

    removeCart: (state, action) => {
      const carId = action.payload;
      const isExixtCart = state.cartList.includes(carId);
      if (isExixtCart) {
        state.cartList = state.cartList.filter((id) => id !== carId);
        removeCartstore(carId);
      }
    },
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

export const { addCart, removeCart } = VehiclesSlice.actions;
export default VehiclesSlice.reducer;
