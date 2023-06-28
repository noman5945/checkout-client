import React from "react";
import { Outlet } from "react-router-dom";
import TopSection from "../Pages/RestaurantPageComps/TopSection/TopSection";
import RestNavBar from "../Pages/RestaurantPageComps/RestNavBar/RestNavBar";

const RestaurantPage = () => {
  return (
    <div className="container mx-auto">
      <TopSection></TopSection>
      <RestNavBar></RestNavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default RestaurantPage;
