import React from "react";
import "../../../Home/home.css";

const FilterFoodTags = ({ tags }) => {
  return (
    <div className=" grid grid-cols-2 h-[50px] overflow-x-auto">
      {tags.map((tag) => {
        return (
          <li className="tag">
            {tag}
            <span className="cross"></span>
          </li>
        );
      })}
    </div>
  );
};

export default FilterFoodTags;
