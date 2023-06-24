import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const TopSection = () => {
  return (
    <div className=" flex flex-row ">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
};

export default TopSection;
