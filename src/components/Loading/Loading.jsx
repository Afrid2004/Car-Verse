import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-50 w-full"></div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
  );
};

export default Loading;
