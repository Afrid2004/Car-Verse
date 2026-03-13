import React from "react";
import { counterData } from "../../../public/bodyData/BodyData";
import Counter from "./Counter";

const Counters = () => {
  return (
    <div className="container pt-10 lg:pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {counterData.map((data, index) => {
          return (
            <Counter
              start={data.start}
              end={data.end}
              label={data.label}
              icon={data.icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Counters;
