import React from "react";
import { Slider } from "@mui/material";
import { useState } from "react";
import "./Slider.css";

const Range = () => {
  const [range, setRange] = useState([200, 1000]);
  const updaterange = (e, item) => {
    setRange(item);
  };
  return (
    <>
      <div className="main">
        <input
          style={{
            width: 45,
            height: 25,
          }}
          value={"$" + range[0].toString()}
          className="price-input"
        />
        <Slider
          value={range}
          valueLabelDisplay="auto"
          onChange={updaterange}
          min={200}
          step={1}
          max={1500}
          disableSwap
          getAriaLabel={() => "Minimum distance shift"}
          style={{
            color: "red",
            margin: "20px",
          }}
        />
        <input
          value={"$" + range[1].toString()}
          style={{
            width: 45,
            height: 25,
          }}
          className="price-input"
        />
      </div>
    </>
  );
};

export default Range;
