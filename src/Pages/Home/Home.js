import React, { useState } from "react";
import "./home.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeLocation from "./HomeLocation/HomeLocation";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import SearchButton from "../Shared/SearchButton/SearchButton";
import Range from "../Shared/Slider/Range";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const link = "/restaurantlist";

  const [foodKeys, setFoodKeys] = useState([]);
  const [location, setlocation] = useState("");
  const [startingPrice, setStartingPrice] = useState(300);
  const [highestPrice, setHighestPrice] = useState(900);
  const navigate = useNavigate();
  const rangComps = {
    start: startingPrice,
    high: highestPrice,
  };

  const handleSearch = () => {
    const searchDataSend = {
      foodKeys,
      location,
      startingPrice,
      highestPrice,
    };
    if (foodKeys.length === 0 || location === "") {
      return alert("Insert food name and location");
    }
    navigate(link, { state: { searchDataSend } });
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
      <Range
        starPrice={setStartingPrice}
        highestPrice={setHighestPrice}
        initalRange={rangComps}
      ></Range>
      <SearchButton link={link} onClickFunc={handleSearch}></SearchButton>
      <Login></Login>
    </div>
  );
};

export default Home;
