import React from "react";
import FilterIcon from "../../Shared/Icons/FilterIcon";

const RestaurantFilter = () => {
  return (
    <div className=" w-[403px] h-[662px] bg-fadedbg m-4 rounded-md px-[51px] py-[21px]">
      <div className="flex flex-row items-center font-semibold">
        <div>
          <FilterIcon></FilterIcon>
        </div>
        <div className="text-2xl">
          <p>Filter Preview</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilter;
