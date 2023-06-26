import React from "react";

const RestaurantFeatures = ({ text }) => {
  return (
    <div className=" w-[5.8125rem] h-[1.5rem] rounded  border-[1.5px] border-borderBlack mr-1">
      <p className=" text-xs text-center p-0 text-LetBlack  font-normal">
        {text}
      </p>
    </div>
  );
};

export default RestaurantFeatures;
