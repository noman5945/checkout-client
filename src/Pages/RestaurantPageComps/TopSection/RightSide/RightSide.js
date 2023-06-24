import React from "react";
import LocationButton from "../../../Shared/Buttons/LocationButton/LocationButton";

const RightSide = () => {
  return (
    <div className=" ml-[100px] mt-[6rem]">
      <div className=" flex flex-row justify-between">
        <h2 className=" text-xl font-bold text-LightBlack">Rest Name</h2>
        <div>
          <LocationButton></LocationButton>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
