import React from "react";

const RadioButtonHorizontal = () => {
  return (
    <div className=" flex flex-row m-2 gap-3">
      <div className=" flex flex-row items-start gap-2">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
          checked
        />
        <label className=" text-base font-semibold">1 Person</label>
      </div>
      <div className=" flex flex-row items-start gap-2">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
        />
        <label className="text-base font-semibold">2 Persons</label>
      </div>
    </div>
  );
};

export default RadioButtonHorizontal;
