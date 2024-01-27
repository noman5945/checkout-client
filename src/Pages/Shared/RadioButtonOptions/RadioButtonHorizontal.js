import React from "react";

const RadioButtonHorizontal = ({ givenPersons }) => {
  const handleDeafult = (value) => {
    return value === givenPersons;
  };
  return (
    <div className=" flex flex-row m-2 gap-3">
      <div className=" flex flex-row items-start gap-2">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
          value={1}
          defaultChecked={handleDeafult(1)}
        />
        <label className=" text-base font-semibold">1 Person</label>
      </div>
      <div className=" flex flex-row items-start gap-2">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-sm checked:bg-deepRed"
          value={2}
          defaultChecked={handleDeafult(2)}
        />
        <label className="text-base font-semibold">2 Persons</label>
      </div>
    </div>
  );
};

export default RadioButtonHorizontal;
