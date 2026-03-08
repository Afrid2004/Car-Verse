import { ExternalLink, Satellite } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./VehiclesSlice";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import createSlug from "../../utils/slug";

const VehiclesView = () => {
  const Dispatch = useDispatch();
  const { vehicles, isLoading } = useSelector((state) => state.VehiclesReducer);
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
            {isLoading
              ? Array.from({ length: 12 }).map((_, index) => {
                  return <Loading key={index} />;
                })
              : vehicles?.map((car, index) => {
                  const {
                    image,
                    brand,
                    model,
                    mileageKmpl,
                    fuelType,
                    control,
                    priceUSD,
                    rangeKm,
                  } = car;
                  return (
                    <div
                      key={index}
                      className=" overflow-hidden rounded-2xl shadow"
                    >
                      <div className="product-img overflow-hidden">
                        <img
                          src={image}
                          className="transition-all duration-300 hover:scale-[1.2] aspect-6/4"
                          alt={brand + " " + model}
                        />
                      </div>
                      <div className="product-detils py-2 px-4">
                        <Link
                          to={`/vehicle/${createSlug(`${brand} ${model}`)}`}
                          state={car}
                        >
                          <h4 className="text-[20px] font-bold hover:text-[#405FF2]">
                            {brand + " " + model}
                          </h4>
                        </Link>
                        <div className="features flex gap-2 items-center justify-between border-t border-t-gray-200 border-b border-b-gray-200 py-3 my-3">
                          <div className="milage flex flex-col gap-1 items-center">
                            <img
                              src="images/milage.png"
                              className="w-4"
                              alt="milage"
                            />
                            <p>
                              {mileageKmpl
                                ? `${mileageKmpl} KM/L`
                                : `${rangeKm} KM/H`}
                            </p>
                          </div>
                          <div className="fuel flex flex-col gap-1 items-center">
                            <img
                              src="images/fuel.png"
                              className="w-4"
                              alt="fuel"
                            />
                            <p>{fuelType}</p>
                          </div>
                          <div className="control flex flex-col gap-1 items-center">
                            <img
                              src="images/control.png"
                              className="w-4"
                              alt="control"
                            />
                            <p>{control}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pb-2 pt-1">
                          <p className="text-[22px] font-bold">
                            ${priceUSD.toLocaleString()}
                          </p>
                          <Link
                            to={`/vehicle/${createSlug(`${brand} ${model}`)}`}
                          >
                            <button className="text-[14px] flex items-center gap-2 px-4 py-2 rounded-4xl btn-primary cursor-pointer">
                              View Details <ExternalLink className="w-4" />
                            </button>
                          </Link>
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
