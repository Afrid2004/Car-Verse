import { ExternalLink } from "lucide-react";
import React from "react";

const Brands = () => {
  return (
    <div>
      <div className="container flex justify-center items-center pt-5 pb-20">
        <div className="brands-content w-full">
          <div className="brand-topper flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div className="mb-3 md:mb-0">
              <h4 className="text-[35px] font-bold">
                Explore Our Premium Brands
              </h4>
            </div>
            <div>
              <a href="#">
                <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-4xl hover:bg-[#405FF2] hover:text-white transition-all duration-300 cursor-pointer">
                  Show All Brands <ExternalLink className="w-5" />
                </button>
              </a>
            </div>
          </div>
          <div className="all-brands grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4">
              <div>
                <img src="images/audi.png" alt="audi" />
              </div>
              <p>Audi</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4">
              <div>
                <img src="images/bmw.png" alt="bmw" />
              </div>
              <p>BMW</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4">
              <div>
                <img src="images/ford.png" alt="ford" />
              </div>
              <p>Ford</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4">
              <div>
                <img src="images/mercedes.png" alt="mercedes" />
              </div>
              <p>Mercedes-Benz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
