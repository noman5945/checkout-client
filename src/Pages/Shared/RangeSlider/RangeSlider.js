import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value * 100}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([200, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <div className="flex flex-row items-center">
        <input
          style={{
            width: 45,
            height: 25,
          }}
          value={"$" + value[0].toString()}
          className="price-input"
        />
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          min={200}
          step={1}
          max={1500}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          style={{
            color: "red",
            margin: "10px",
          }}
        />
        <input
          style={{
            width: 45,
            height: 25,
          }}
          value={"$" + value[1].toString()}
          className="price-input"
        />
      </div>
    </Box>
  );
}
