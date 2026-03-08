import React from "react";
import HeroBanner from "../../components/Hero_Banner";
import Brands from "../../components/Brands/Brands";
import Vehicles from "../Vehicles/VehiclesView";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="max-w-[95%] mx-auto shadow-2xl">
        <Brands></Brands>
        <Vehicles></Vehicles>
      </div>
    </>
  );
};

export default Home;
