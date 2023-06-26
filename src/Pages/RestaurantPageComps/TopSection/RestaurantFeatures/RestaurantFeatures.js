import React from "react";
import NotSelected from "./NotSelected";
import UserSelected from "./UserSelected";

const RestaurantFeatures = ({ text, selected }) => {
  let usergiven = null;
  usergiven = selected.find((ele) => ele === text);

  if (usergiven) {
    return <UserSelected text={text}></UserSelected>;
  } else {
    return <NotSelected text={text}></NotSelected>;
  }
};

export default RestaurantFeatures;
