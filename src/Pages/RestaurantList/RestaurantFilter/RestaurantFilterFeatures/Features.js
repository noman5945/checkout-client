import React from "react";
import "../../../Home/home.css";

const Features = (optionName, optionid) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={optionid} />
      <label htmlFor="checkbox1">{optionName}</label>
    </div>
  );
};

export default Features;
