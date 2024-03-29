import React from "react";
import RangeSlider from "../../../Shared/RangeSlider/RangeSlider";

const FIlterPriceRange = ({ initValus }) => {
  return (
    <div className="block mt-[35px] mb-[20px]">
      <div className=" text-base font-bold text-center">
        <p>Price Range(Ex: 500-1200)</p>
      </div>
      <div className=" flex justify-center">
        <RangeSlider InitValues={initValus}></RangeSlider>
      </div>
    </div>
  );
};

export default FIlterPriceRange;
