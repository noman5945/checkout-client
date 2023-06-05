//import { Chip } from "@mui/material";
import React from "react";
import "../../Home/home.css";

const Tags = ({ word, handleDeleteChip }) => {
  return (
    <div>
      {/* 
      <Chip
        className=" bg-red-400 text-white"
        label={word}
        variant="outlined"
        color="error"
        onDelete={handleDeleteChip}
      ></Chip>
       */}
      <li className="tag">
        {word}
        <span className="cross" onClick={handleDeleteChip}></span>
      </li>
    </div>
  );
};

export default Tags;
