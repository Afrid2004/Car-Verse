import React from "react";
import HeroBanner from "../../components/Hero_Banner";
import Brands from "../../components/Brands/Brands";
import Vehicles from "../Vehicles/VehiclesView";
import Video from "../../components/Video/Video";
import Counters from "../../components/Counter/Counters";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="max-w-[95%] mx-auto shadow-2xl pb-0 md:pb-16">
        <Brands></Brands>
        <Vehicles></Vehicles>
        <Video></Video>
        <Counters />
      </div>
    </>
  );
};

export default Home;
