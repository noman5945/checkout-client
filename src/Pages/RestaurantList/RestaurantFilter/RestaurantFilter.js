import React from "react";
import RestaurantFilterFeature from "./RestaurantFilterFeatures/RestaurantFilterFeature";
import FilterHeader from "./FilterHeader/FilterHeader";
import FilterLocationTags from "./FilterLocationTags/FilterLocationTags";
import FIlterPriceRange from "./FilterPriceRange/FIlterPriceRange";

const RestaurantFilter = () => {
  //const tags = ["Burger", "Pizza", "Coffee", "French fries"];

  return (
    <div className=" w-[403px] h-[662px] bg-fadedbg m-4 rounded-md px-[51px] py-[21px]">
      <FilterHeader></FilterHeader>
      <FilterLocationTags></FilterLocationTags>
      <RestaurantFilterFeature></RestaurantFilterFeature>
      <FIlterPriceRange></FIlterPriceRange>
    </div>
  );
};

export default RestaurantFilter;
