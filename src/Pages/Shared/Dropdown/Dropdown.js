import React, { useState } from "react";

const Dropdown = ({ selected, options, setParentData, otherFn }) => {
  const [option, setOption] = useState(selected);
  const handleChange = (e) => {
    setOption(e.target.value);
    if (setParentData !== null) {
      setParentData(e.target.value);
    }
    if (typeof otherFn === "function") {
      otherFn();
    }
  };
  return (
    <label className=" p-2">
      <select
        className=" cursor-pointer bg-[inherit] text-LetBlack"
        value={option}
        onChange={(e) => handleChange(e)}
      >
        {options.map((op, index) => {
          return (
            <option className=" text-LetBlack" key={index} value={op}>
              {op}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Dropdown;
