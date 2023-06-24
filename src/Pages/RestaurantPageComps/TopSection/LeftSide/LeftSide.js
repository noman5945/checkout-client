import React from "react";
import cover from "../../../../assets/RestaurantImages/restCover.png";
import pfp from "../../../../assets/RestaurantImages/restProfile.png";

const LeftSide = () => {
  return (
    <div className=" relative w-[415px] h-[385px]">
      <img className=" absolute rounded-md" src={cover} alt="cover"></img>
      <img
        className=" absolute top-[3.37rem] right-0 rounded-full border-4 border-solid border-LetWhite mr-[-70px]"
        src={pfp}
        alt="profilepic"
      />
    </div>
  );
};

export default LeftSide;
