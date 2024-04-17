import React, { useState, useEffect } from "react";
import RestaurantListCard from "./RestaurantListCard/RestaurantListCard";
import { Link, useLocation } from "react-router-dom";
import RestaurantFilter from "./RestaurantFilter/RestaurantFilter";
import "../Home/home.css";
import restLogo from "../../assets/BackGroundImages/Checkout-Logowhite_2.png";
import restBackGround from "../../assets/BackGroundImages/RestBackGround.png";
import "./Restaurant.css";
import Loader from "../Shared/Loader/Loader";
import Dropdown from "../Shared/Dropdown/Dropdown";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loader, setLoader] = useState(false);
  const sortOPtions = ["Price", "Rating"];
  const [sortby, setSortBy] = useState(sortOPtions[0]);
  const { state } = useLocation();
  const { searchDataSend } = state;
  const { startingPrice, highestPrice, location, features, persons } =
    searchDataSend;
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
    console.log(features + " " + locat);
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
        <div className=" relative left-[76%]">
          <div className=" flex flex-row items-center">
            <p className=" font-bold text-base">Sort By:</p>
            <div className=" bg-fadedbg w-[200px] h-[35px] flex flex-row p-1">
              <div className=" bg-whitebg w-[73px] h-[27px]">
                <Dropdown
                  selected={sortby}
                  options={sortOPtions}
                  setParentData={setSortBy}
                ></Dropdown>
              </div>
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
              features={features}
              personNumber={persons}
            ></RestaurantFilter>
          </div>
          <div>
            {loader ? (
              <Loader></Loader>
            ) : (
              restaurants.map((restaurant) => (
                <Link key={restaurant._id} to={`/restaurant/${restaurant._id}`}>
                  <RestaurantListCard
                    resturant={restaurant}
                    time={time}
                  ></RestaurantListCard>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
