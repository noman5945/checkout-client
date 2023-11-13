import React, { useState } from "react";
import "./home.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeLocation from "./HomeLocation/HomeLocation";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import SearchButton from "../Shared/SearchButton/SearchButton";
import Range from "../Shared/Slider/Range";
import Login from "../Login/Login";

const Home = () => {
  const link = "/restaurantlist";
  const [foodKeys, setFoodKeys] = useState([]);
  const [location, setlocation] = useState("");
  const handleSearch = () => {
    console.log(foodKeys);
    console.log(location);
  };
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeLocation
        setFoodKeys={setFoodKeys}
        foodKeys={foodKeys}
        setLocation={setlocation}
      ></HomeLocation>
      <HomeFeatures></HomeFeatures>
      <Range></Range>
      <SearchButton link={link} onClickFunc={handleSearch}></SearchButton>
      <Login></Login>
    </div>
  );
};

export default Home;
