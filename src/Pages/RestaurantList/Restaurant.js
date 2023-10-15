import React, { useEffect, useState } from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";
import { Link } from "react-router-dom";
import RestaurantFilter from "./RestaurantFilter/RestaurantFilter";

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
  );
};

export default Restaurant;
