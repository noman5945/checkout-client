import React from "react";
import { Outlet } from "react-router-dom";

const RestaurantPage = () => {
  return (
    <div>
      <h2>Restaurant Page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default RestaurantPage;
