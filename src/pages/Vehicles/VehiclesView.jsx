import { ExternalLink, Satellite } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./VehiclesSlice";

const VehiclesView = () => {
  const Dispatch = useDispatch();
  const vehicles = useSelector((state) => state.VehiclesReducer.vehicles);
  console.log(vehicles);

  useEffect(() => {
    Dispatch(fetchData());
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <h4 className="text-[35px] font-bold mb-5">Explore All Vehicles</h4>
          <div className="vehicles-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vehicles &&
              vehicles.map((car) => {
                return (
                  <div className=" overflow-hidden rounded-2xl shadow">
                    <div className="product-img overflow-hidden">
                      <img
                        src={car.image}
                        className="transition-all duration-300 hover:scale-[1.2] aspect-6/4"
                        alt={car.brand + " " + car.model}
                      />
                    </div>
                    <div className="product-detils py-2 px-4">
                      <a href="#">
                        <h4 className="text-[20px] font-bold hover:text-[#405FF2]">
                          {car.brand + " " + car.model}
                        </h4>
                      </a>
                      <div className="features flex gap-2 items-center justify-between border-t border-t-gray-200 border-b border-b-gray-200 py-3 my-3">
                        <div className="milage flex flex-col gap-1 items-center">
                          <img
                            src="images/milage.png"
                            className="cursor-pointer"
                            alt="milage"
                          />
                          <p>{car.mileageKmpl} KM/L</p>
                        </div>
                        <div className="fuel flex flex-col gap-1 items-center">
                          <img src="images/fuel.png" alt="fuel" />
                          <p>{car.fuelType}</p>
                        </div>
                        <div className="control flex flex-col gap-1 items-center">
                          <img src="images/control.png" alt="control" />
                          <p>{car.control}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 pt-1">
                        <p className="text-[22px] font-bold">
                          $
                          {car.priceUSD.toString().slice(0, 2) +
                            "," +
                            car.priceUSD.toString().slice(2)}
                        </p>
                        <a href="#">
                          <button className="text-[14px] flex items-center gap-2 px-4 py-2 rounded-4xl btn-primary cursor-pointer">
                            View Details <ExternalLink className="w-4" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesView;
