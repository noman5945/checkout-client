import { Chip } from "@mui/material";
import React from "react";

const Tags = ({ word, handleDeleteChip }) => {
  return (
    <div>
      <Chip
        className=" bg-red-400 text-white"
        label={word}
        variant="outlined"
        color="error"
        onDelete={handleDeleteChip}
      ></Chip>
    </div>
  );
};

export default Tags;
