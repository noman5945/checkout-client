import React from "react";

const RadioButtonOptions = () => {
  return (
    <div className=" block ml-4">
      <div className=" flex flex-row items-start">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
          checked
        />
        <label className=" ms-3 text-base font-semibold">1 Person</label>
      </div>
      <div className=" flex flex-row items-start">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
        />
        <label className=" ms-3 text-base font-semibold">2 Persons</label>
      </div>
    </div>
  );
};

export default RadioButtonOptions;
