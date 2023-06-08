import React from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";

const Restaurant = () => {
  let today = new Date();
  let currentHour = parseInt(today.getHours()) % 12;
  currentHour =
    currentHour.toString().length > 1
      ? currentHour.toString()
      : "0" + currentHour.toString();
  const currentTime = currentHour + ":" + today.getMinutes();
  console.log(currentTime.split(":")[0]);
  const restaurants = [
    {
      _id: "01",
      name: "Takeout",
      img: "",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
    },
    {
      _id: "02",
      name: "American Burger",
      img: "",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
    },
    {
      _id: "03",
      name: "Chillox",
      img: "",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
    },
  ];
  return (
    <div>
      <div className="flex flex-row"></div>
      {restaurants.map((restaurant) => (
        <RestaurantListCard
          key={restaurant._id}
          resturant={restaurant}
          time={currentTime}
        ></RestaurantListCard>
      ))}
    </div>
  );
};

export default Restaurant;
