import React from "react";
import "./home.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeLocation from "./HomeLocation/HomeLocation";
import HomeFeatures from "./HomeFeatures/HomeFeatures";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeLocation></HomeLocation>
      <HomeFeatures></HomeFeatures>
    </div>
  );
};

export default Home;
