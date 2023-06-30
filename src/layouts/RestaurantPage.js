import React from "react";
import { Outlet } from "react-router-dom";
import TopSection from "../Pages/RestaurantPageComps/TopSection/TopSection";
import RestNavBar from "../Pages/RestaurantPageComps/RestNavBar/RestNavBar";
import PaymentAndContacts from "../Pages/RestaurantPageComps/PaymentAndContacts/PaymentAndContacts";

const RestaurantPage = () => {
  return (
    <div className="container mx-auto">
      <TopSection></TopSection>
      <RestNavBar></RestNavBar>
      <div className=" flex flex-row">
        <PaymentAndContacts></PaymentAndContacts>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RestaurantPage;
