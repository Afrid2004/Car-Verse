import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Vehicles/VehiclesSlice";

const Cart = () => {
  const { cartList, vehicles } = useSelector((state) => state.VehiclesReducer);
  const Dispatch = useDispatch();

  useEffect(() => {
    if (!vehicles.length) {
      Dispatch(fetchData());
    }
  }, [vehicles.length, Dispatch]);

  const filterData = vehicles.filter((data) => cartList.includes(data.carId));
  console.log(filterData);

  return (
    <div className="container pt-24 pb-16">
      <div className="grid grid-cols-1">
        {filterData.length > 0
          ? filterData.map((car, index) => {
              return (
                <div key={index} className="grid grid-cols-2 gap-5">
                  <div>
                    <img
                      src={car.image}
                      alt={car.brand + car.model}
                      className="aspect-4/3 rounded-2xl"
                    />
                  </div>
                  <h1 className="text-[40px] font-bold">
                    {car.brand + car.model}
                  </h1>
                </div>
              );
            })
          : "No Data found"}
      </div>
    </div>
  );
};

export default Cart;
