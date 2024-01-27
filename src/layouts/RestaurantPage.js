import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import TopSection from "../Pages/RestaurantPageComps/TopSection/TopSection";
import RestNavBar from "../Pages/RestaurantPageComps/RestNavBar/RestNavBar";
import PaymentAndContacts from "../Pages/RestaurantPageComps/PaymentAndContacts/PaymentAndContacts";

const RestaurantPage = () => {
  const resturant = useLoaderData();
  const { _id, img, name } = resturant;
  const top_rightside_items = {
    name,
    img,
  };
  return (
    <div className="container mx-auto">
      <TopSection rightItems={top_rightside_items}></TopSection>
      <RestNavBar id={_id}></RestNavBar>
      <div className=" flex flex-row">
        <PaymentAndContacts></PaymentAndContacts>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RestaurantPage;
