import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removeCart } from "../Vehicles/VehiclesSlice";
import { Link } from "react-router";
import createSlug from "../../utils/slug";
import { ExternalLink, Trash } from "lucide-react";
import Title from "../../components/Helmet/Title";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const Cart = () => {
  const { cartList, vehicles, isLoading } = useSelector(
    (state) => state.VehiclesReducer,
  );
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
      toast.success("Deleted Cart");
    }
  };

  const noDataFound = (
    <div className="flex justify-center items-center col-span-2">
      <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-40 h-40 flex items-center justify-center bg-red-400/20 rounded-full mb-5 border-2 border-red-200/30">
          <img src="/images/nodata.png" className="w-20" alt="nodata" />
        </div>
        <p className="mb-3 text-center">
          Cart is empty. Browse vehicles to add to cart.
        </p>
        <Link to="/vehicles">
          <button
            className="bg-black/90 text-white border cursor-pointer hover:border-black/90 hover:bg-transparent hover:text-black transition-all duration-300
           px-4 py-2 rounded-4xl"
          >
            Browse Vehicles
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container pt-24 pb-0 md:pb-16">
      <Title title="Cart"></Title>
      <h4 className="mb-5 text">
        <span className="text-[35px] ">Cart Items</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {isLoading ? (
          <Loading />
        ) : filterData.length > 0 ? (
          filterData.map((car, index) => {
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
        ) : (
          noDataFound
        )}
      </div>
    </div>
  );
};

export default Cart;
