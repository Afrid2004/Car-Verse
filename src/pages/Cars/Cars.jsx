import React from "react";
import VehiclesView from "../Vehicles/VehiclesView";
import Title from "../../components/Helmet/Title";

const Vehicles = () => {
  return (
    <div className="pt-24 pb-0 md:pb-16">
      <Title title="Vehicles"></Title>
      <VehiclesView />
    </div>
  );
};

export default Vehicles;
