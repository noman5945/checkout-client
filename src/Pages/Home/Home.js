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
  const apiURL = "http://localhost:5000/getRestaurents";

  const [foodKeys, setFoodKeys] = useState([]);
  const [location, setlocation] = useState("");
  const [startingPrice, setStartingPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchDataSend = {
      foodKeys,
      location,
      startingPrice,
      highestPrice,
    };
    //console.log(searchDataSend);
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchDataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(link, { state: { data } });
      });
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
      ></Range>
      <SearchButton link={link} onClickFunc={handleSearch}></SearchButton>
      <Login></Login>
    </div>
  );
};

export default Home;
