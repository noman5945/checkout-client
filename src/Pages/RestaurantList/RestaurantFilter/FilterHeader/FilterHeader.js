import React from "react";
import FilterIcon from "../../../Shared/Icons/FilterIcon";

const FilterHeader = () => {
  return (
    <div className="flex flex-row items-center font-semibold">
      <div>
        <FilterIcon></FilterIcon>
      </div>
      <div className="text-2xl">
        <p>Filter Preview</p>
      </div>
    </div>
  );
};

export default FilterHeader;
