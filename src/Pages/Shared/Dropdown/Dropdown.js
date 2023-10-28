import React, { useState } from "react";

const Dropdown = ({ selected, options }) => {
  const [option, setOption] = useState(selected);
  return (
    <label className=" p-2">
      <select
        className=" bg-[inherit] text-LetBlack"
        value={option}
        onChange={(e) => setOption(e.target.value)}
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
