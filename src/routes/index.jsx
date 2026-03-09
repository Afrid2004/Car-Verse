import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SingleVehicle from "../pages/SingleVehicle/SingleVehicle";
import Cart from "../pages/Cart/Cart";
import Vehicles from "../pages/Cars/Cars";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/vehicles",
        Component: Vehicles,
      },
      {
        path: "/vehicle/:title",
        Component: SingleVehicle,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);
