import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const TopSection = ({ rightItems }) => {
  return (
    <div className=" flex flex-row ">
      <LeftSide></LeftSide>
      <RightSide items={rightItems}></RightSide>
    </div>
  );
};

export default TopSection;
