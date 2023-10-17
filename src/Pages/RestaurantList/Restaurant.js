import React, { useEffect, useState } from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";
import { Link } from "react-router-dom";
import RestaurantFilter from "./RestaurantFilter/RestaurantFilter";
import "../Home/home.css";
import restLogo from "../../assets/BackGroundImages/Checkout-Logowhite_2.png";
import restBackGround from "../../assets/BackGroundImages/RestBackGround.png";
import "./Restaurant.css";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
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
  console.log(time);
  useEffect(() => {
    fetch("restaurants.json")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);
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
            <RestaurantFilter></RestaurantFilter>
          </div>
          <div>
            {restaurants.map((restaurant) => (
              <Link key={restaurant._id} to={"/restaurant"}>
                <RestaurantListCard
                  resturant={restaurant}
                  time={time}
                ></RestaurantListCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
