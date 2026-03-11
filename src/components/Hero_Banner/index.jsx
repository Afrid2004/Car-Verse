// import Swiper core and required modules
import {
  Pagination,
  Autoplay,
  EffectCreative,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { heroBannerData } from "../../../public/bodyData/BodyData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Search } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        //pagination={{ draggable: true, clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        className="heroSwiper"
      >
        {heroBannerData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="hero-img object-cover object-center"
                  src={slide.img}
                  alt="hero-bg"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="overlay-div absolute w-full h-full left-0 top-0 z-1 flex  pointer-events-none bg-black/20">
        <div className="container h-full">
          <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-[700px] flex flex-col items-center  pointer-events-auto">
              <div className="text-white text-center">
                <p className="mb-3">Find cars for sale and for rent near you</p>
                <h1 className="text-[70px] font-bold leading-none mb-10">
                  Find Your Perfect Car
                </h1>
              </div>
              <form className="w-full bg-white p-3 rounded-3xl md:rounded-full flex flex-col md:flex-row md:items-center gap-2">
                <div className="grow">
                  <select
                    defaultValue="Pick a color"
                    className="select border-0 outline-0 rounded-full cursor-pointer w-full bg-white"
                  >
                    <option disabled={true}>Select Model</option>
                    <option>Toyota Corolla</option>
                    <option>Honda Civic</option>
                    <option>Tesla Model 3</option>
                    <option>BMW 3 Series</option>
                  </select>
                </div>
                <div className="grow">
                  <select
                    defaultValue="Pick a color"
                    className="select border-0 outline-0 rounded-full cursor-pointer w-full bg-white"
                  >
                    <option disabled={true}>Select Color</option>
                    <option>Black</option>
                    <option>Silver</option>
                    <option>Gray</option>
                    <option>Golden</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-primary py-2 px-6 rounded-full flex items-center justify-center gap-2"
                >
                  {" "}
                  <Search className="w-5" /> Search Cars
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40px] w-[95%] bg-white rounded-t-4xl z-2 absolute bottom-0 left-[50%] translate-x-[-50%]"></div>
    </div>
  );
};

export default HeroBanner;
