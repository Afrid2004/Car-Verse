import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removeCart } from "../Vehicles/VehiclesSlice";
import { Link } from "react-router";
import createSlug from "../../utils/slug";
import { ExternalLink, ShoppingCart, Trash } from "lucide-react";
import Title from "../../components/Helmet/Title";

const Cart = () => {
  const { cartList, vehicles } = useSelector((state) => state.VehiclesReducer);
  const Dispatch = useDispatch();

  useEffect(() => {
    if (!vehicles.length) {
      Dispatch(fetchData());
    }
  }, [vehicles.length, Dispatch]);

  const filterData = vehicles.filter((data) => cartList.includes(data.carId));

  const handleRemoveCart = (id) => {
    const isExist = cartList.includes(id);
    if (isExist) {
      Dispatch(removeCart(id));
    }
  };

  return (
    <div className="container pt-24 pb-0 md:pb-16">
      <Title title="Cart"></Title>
      <h4 className="mb-5 text">
        <span className="text-[35px] ">Cart Items</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filterData.length > 0
          ? filterData.map((car, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-5 bg-gray-100 rounded-3xl p-4"
                >
                  <div className="col-span-12 lg:col-span-5">
                    <img
                      src={car.image}
                      alt={car.brand + car.model}
                      className="aspect-4/3 rounded-2xl"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <div className="mb-3">
                      <Link
                        to={`/vehicle/${createSlug(`${car.brand} ${car.model}`)}`}
                      >
                        <h1 className="text-[35px] leading-none hover:text-primary transition-all duration-75">
                          {`${car.brand} ${car.model}`}
                        </h1>
                      </Link>
                    </div>
                    <div className="mb-3">
                      <div className="Brand bg-gray-200/60 text-primary border border-gray-200 py-1 px-4 rounded-2xl w-fit">
                        <p className="text-[14px]">Brand: {car.brand}</p>
                      </div>
                    </div>
                    <p className="leading-7 line-clamp-2 mb-3 text-gray-600">
                      {car.review}
                    </p>
                    <div className="vehicle-bottom flex items-center justify-between flex-wrap">
                      <h2 className="text-[25px] font-bold">
                        ${car.priceUSD.toLocaleString()}
                      </h2>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/vehicle/${createSlug(`${car.brand} ${car.model}`)}`}
                        >
                          <button className="btn-primary text-[14px] px-4 py-1 rounded-4xl flex gap-2 items-center">
                            View
                            <ExternalLink className="w-4" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleRemoveCart(car.carId)}
                          className="bg-black/90 text-white cursor-pointer hover:text-red-400 text-[14px] px-4 py-1 rounded-4xl flex gap-2 transition-all duration-75 items-center"
                        >
                          <Trash className="w-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No Data found"}
      </div>
    </div>
  );
};

export default Cart;
