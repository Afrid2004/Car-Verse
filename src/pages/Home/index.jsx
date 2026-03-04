import React from "react";
import HeroBanner from "../../components/Hero_Banner";
import Brands from "../../components/Brands/Brands";
import Vehicles from "../Vehicles/VehiclesView";
import { Provider } from "react-redux";
import { Store } from "../../Store/Store";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="max-w-[95%] mx-auto shadow-2xl">
        <Brands></Brands>
        <Provider store={Store}>
          <Vehicles></Vehicles>
        </Provider>
      </div>
    </>
  );
};

export default Home;
