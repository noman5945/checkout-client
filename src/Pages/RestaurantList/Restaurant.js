import React, { useState, useEffect } from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";
import { useLocation } from "react-router-dom";
import RestaurantFilter from "./RestaurantFilter/RestaurantFilter";
import "../Home/home.css";
import restLogo from "../../assets/BackGroundImages/Checkout-Logowhite_2.png";
import restBackGround from "../../assets/BackGroundImages/RestBackGround.png";
import "./Restaurant.css";
import Loader from "../Shared/Loader/Loader";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loader, setLoader] = useState(false);
  const { state } = useLocation();
  const { searchDataSend } = state;
  const { startingPrice, highestPrice, location } = searchDataSend;
  const InitValues = {
    startingPrice,
    highestPrice,
  };
  const [locat, setlocation] = useState(location);
  const apiURL = "http://localhost:5000/getRestaurents";

  let today = new Date();
  let dayCheck =
    today.getHours() > 6 && today.getHours() < 24 ? "Day" : "Night";
  let currentHour = parseInt(today.getHours());
  currentHour =
    currentHour.toString().length > 1
      ? currentHour.toString()
      : "0" + currentHour.toString();
  const currentTime = currentHour + ":" + today.getMinutes();
  const time = {
    currentTime,
    dayCheck,
  };
  const handleSearchFilter = () => {
    console.log(locat);
  };

  useEffect(() => {
    /*
    fetch("http://localhost:5000/allrestaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
    */
    setLoader(true);
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchDataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setRestaurants(data);
      });
  }, [searchDataSend]);

  return (
    <div className=" relative">
      <div className=" absolute left-[122px]">
        <img className="RestBackground" src={restBackGround} alt="" />
      </div>
      <div className=" mt-[98px] absolute  left-[190px]">
        <div className=" flex flex-row justify-center items-center">
          <div className=" mr-[90px]">
            <img src={restLogo} alt="checkout" />
          </div>
          <div>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start">
          <div>
            <RestaurantFilter
              location={location}
              setLocation={setlocation}
              handleFilter={handleSearchFilter}
              initalPrices={InitValues}
              initalSearchData={searchDataSend}
            ></RestaurantFilter>
          </div>
          <div>
            {loader ? (
              <Loader></Loader>
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantListCard
                  resturant={restaurant}
                  time={time}
                  key={restaurant._id}
                ></RestaurantListCard>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
