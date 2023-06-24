import React from "react";
import { Outlet } from "react-router-dom";
import TopSection from "../Pages/RestaurantPageComps/TopSection/TopSection";

const RestaurantPage = () => {
  return (
    <div className="container mx-auto">
      <TopSection></TopSection>
      <Outlet></Outlet>
    </div>
  );
};

export default RestaurantPage;
