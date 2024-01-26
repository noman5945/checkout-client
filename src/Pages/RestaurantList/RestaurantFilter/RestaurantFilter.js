import React from "react";
import RestaurantFilterFeature from "./RestaurantFilterFeatures/RestaurantFilterFeature";
import FilterHeader from "./FilterHeader/FilterHeader";
import FilterLocationTags from "./FilterLocationTags/FilterLocationTags";
import FIlterPriceRange from "./FilterPriceRange/FIlterPriceRange";
import RadioButtonHorizontal from "../../Shared/RadioButtonOptions/RadioButtonHorizontal";
import FilterBottomPic from "../../Shared/Icons/FilterBottomPic";
import FilterFoodTags from "./FilterFoodTags/FilterFoodTags";

const RestaurantFilter = ({
  setLocation,
  handleFilter,
  initalPrices,
  location,
  initalSearchData,
}) => {
  const { foodKeys } = initalSearchData;
  console.log(foodKeys);
  //const tags = ["Burger", "Pizza", "Coffee", "French fries"];
  //console.log("inital:" + initalPrices.highestPrice);
  return (
    <div className=" w-[403px] h-[720px] bg-fadedbg m-4 rounded-md px-[51px] py-[21px]">
      <FilterHeader></FilterHeader>
      <FilterLocationTags
        setLocation={setLocation}
        prevLoc={location}
      ></FilterLocationTags>
      <FilterFoodTags tags={foodKeys}></FilterFoodTags>
      <RestaurantFilterFeature></RestaurantFilterFeature>
      <FIlterPriceRange initValus={initalPrices}></FIlterPriceRange>
      <RadioButtonHorizontal></RadioButtonHorizontal>
      <div className=" flex justify-center mt-[27px]">
        <FilterBottomPic></FilterBottomPic>
      </div>
      <button className=" btn" onClick={handleFilter}>
        Search
      </button>
    </div>
  );
};

export default RestaurantFilter;
