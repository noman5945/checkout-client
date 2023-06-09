import React from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";

const Restaurant = () => {
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
  const restaurants = [
    {
      _id: "01",
      name: "Takeout",
      img: "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
      WorkTime: "Day",
      lowestPrice: "450",
    },
    {
      _id: "02",
      name: "American Burger",
      img: "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
      WorkTime: "Day",
      lowestPrice: "370",
    },
    {
      _id: "03",
      name: "Chillox",
      img: "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg",
      ratings: "4.7",
      opening: "10:00am",
      closing: "11:00pm",
      WorkTime: "Day",
      lowestPrice: "325",
    },
  ];
  return (
    <div>
      <div className="flex flex-row"></div>
      {restaurants.map((restaurant) => (
        <RestaurantListCard
          key={restaurant._id}
          resturant={restaurant}
          time={time}
        ></RestaurantListCard>
      ))}
    </div>
  );
};

export default Restaurant;
