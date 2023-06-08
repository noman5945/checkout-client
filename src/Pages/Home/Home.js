import React from "react";
import "./home.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeLocation from "./HomeLocation/HomeLocation";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import SearchButton from "../Shared/SearchButton/SearchButton";
import Range from "../Shared/Slider/Range";
import Login from "../Login/Login";

const Home = () => {
  const link = "/restaurantlist";
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeLocation></HomeLocation>
      <HomeFeatures></HomeFeatures>
      <Range></Range>
      <SearchButton link={link}></SearchButton>
      <Login></Login>
    </div>
  );
};

export default Home;
