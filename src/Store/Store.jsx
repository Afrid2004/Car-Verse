import { configureStore } from "@reduxjs/toolkit";
import VehiclesReducer from "../pages/Vehicles/VehiclesSlice";

export const Store = configureStore({
  reducer: {
    VehiclesReducer: VehiclesReducer,
  },
});
