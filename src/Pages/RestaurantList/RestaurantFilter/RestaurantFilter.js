import React from "react";
import RestaurantFilterFeature from "./RestaurantFilterFeatures/RestaurantFilterFeature";
import FilterHeader from "./FilterHeader/FilterHeader";
import FilterLocationTags from "./FilterLocationTags/FilterLocationTags";
import FIlterPriceRange from "./FilterPriceRange/FIlterPriceRange";
import RadioButtonHorizontal from "../../Shared/RadioButtonOptions/RadioButtonHorizontal";
import FilterBottomPic from "../../Shared/Icons/FilterBottomPic";

const RestaurantFilter = () => {
  //const tags = ["Burger", "Pizza", "Coffee", "French fries"];

  return (
    <div className=" w-[403px] h-[662px] bg-fadedbg m-4 rounded-md px-[51px] py-[21px]">
      <FilterHeader></FilterHeader>
      <FilterLocationTags></FilterLocationTags>
      <RestaurantFilterFeature></RestaurantFilterFeature>
      <FIlterPriceRange></FIlterPriceRange>
      <RadioButtonHorizontal></RadioButtonHorizontal>
      <div className=" flex justify-center mt-[27px]">
        <FilterBottomPic></FilterBottomPic>
      </div>
    </div>
  );
};

export default RestaurantFilter;
