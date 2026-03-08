import { ShoppingCart } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import createSlug from "../../utils/slug";
import { fetchData } from "../Vehicles/VehiclesSlice";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Helmet/Title";

const SingleVehicle = () => {
  const { title } = useParams();
  const Dispatch = useDispatch();
  const { vehicles, isLoading } = useSelector((state) => state.VehiclesReducer);

  useEffect(() => {
    if (!vehicles.length) {
      Dispatch(fetchData());
    }
  }, [vehicles.length, Dispatch]);

  const vehicle = vehicles.find((car) => {
    return createSlug(`${car.brand} ${car.model}`) === title;
  });

  if (isLoading || !vehicle) {
    return (
      <div className="container pt-24">
        <Loading />
      </div>
    );
  }

  const {
    image,
    brand,
    model,
    review,
    priceUSD,
    rating,
    tags,
    fuelType,
    horsePower,
    seats,
    control,
    mileageKmpl,
    variant,
    rangeKm,
  } = vehicle;

  return (
    <div className="container pt-26 pb-16">
      <Title title={`${brand} ${model}`}></Title>
      <div className="div flex items-center justify-center w-full">
        <div className="grid grid-cols-2 gap-7 bg-gray-100 p-4 rounded-3xl">
          <div>
            <img
              src={image}
              className="aspect-4/3 rounded-2xl object-cover"
              alt={`${brand} ${model}`}
            />
          </div>
          <div>
            <div className="vehicle-topper mb-5">
              <h1 className="text-[40px] font-bold mb-3 leading-none">{`${brand} ${model}`}</h1>
              <div className="Brand bg-primary text-white py-1 px-4 rounded-2xl w-fit">
                <p>Brand: {brand}</p>
              </div>
            </div>
            <div className="vehicle-middle mb-5">
              <p className="leading-7 mb-3">
                <span className="font-medium">Review: </span>
                {review}
              </p>
              <div className="tags flex gap-2 items-center mb-7">
                <span className="font-medium">Tags: </span>
                {tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-[15px] bg-[#405FF2]/15 text-primary px-4 py-1 rounded-4xl"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="features w-full max-w-[400px] grid grid-cols-3 gap-4 mb-7">
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center gap-2 justify-center">
                  <img
                    src="/images/milage.png"
                    className="w-5.5"
                    alt="milage"
                  />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {mileageKmpl ? `${mileageKmpl} KM/L` : `${rangeKm} KM`}
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center justify-center gap-2">
                  <img src="/images/fuel.png" className="w-5.5" alt="fuel" />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {fuelType}
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center gap-2 justify-center">
                  <img
                    src="/images/control.png"
                    className="w-5.5"
                    alt="control"
                  />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {control}
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center justify-center gap-2">
                  <img src="/images/power.png" className="w-6" alt="power" />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {horsePower} HP
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center justify-center gap-2">
                  <img src="/images/seat.png" className="w-6" alt="seat" />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {seats} Seats
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-[5px] flex flex-col items-center justify-center gap-2">
                  <img
                    src="/images/variant.png"
                    className="w-6"
                    alt="variant"
                  />
                  <p className="line-clamp-1 w-full overflow-hidden wrap-break-word text-center">
                    {variant}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rating: </span>
                <div className="rating flex items-center gap-2">
                  <img
                    src="/images/star.png"
                    className="w-5 h-5 bg-transparent opacity-100"
                    alt="rating"
                  />
                  <img
                    src="/images/star.png"
                    className="w-5 h-5 bg-transparent opacity-100"
                    alt="rating"
                  />
                  <img
                    src="/images/star.png"
                    className="w-5 h-5 bg-transparent opacity-100"
                    alt="rating"
                  />
                  <img
                    src="/images/star.png"
                    className="w-5 h-5 bg-transparent opacity-100"
                    alt="rating"
                  />
                  <img
                    src="/images/star-half.png"
                    className="w-5 h-5 bg-transparent opacity-100"
                    alt="rating"
                  />
                </div>
                <span>({rating}+)</span>
              </div>
            </div>
            <div className="vehicle-bottom flex items-center justify-between">
              <h2 className="text-[35px] font-bold">
                ${priceUSD.toLocaleString()}
              </h2>
              <div>
                <a href="#">
                  <button className="btn-primary px-4 py-2 rounded-4xl flex gap-2 items-center">
                    <ShoppingCart className="w-5" /> Add to Cart
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVehicle;
