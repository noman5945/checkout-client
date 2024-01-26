import React from "react";
import Dropdown from "../../../Shared/Dropdown/Dropdown";

const FilterLocationTags = ({ setLocation, prevLoc }) => {
  //console.log( prevLoc);
  const currentLoc = prevLoc;
  const locs = ["Mohammadpur", "Gulshan", "Uttara", "Dhanmondi", "Khilgaon"];
  return (
    <div className="flex flex-col">
      <div className="block my-[15px]">
        <div className="cursor-pointer w-[9rem] h-[2rem] bg-RedBack rounded mr-2">
          <Dropdown
            selected={currentLoc}
            options={locs}
            setParentData={setLocation}
          ></Dropdown>
        </div>
      </div>
    </div>
  );
};

export default FilterLocationTags;
