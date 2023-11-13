import React, { useState } from "react";
import LocationButton from "../../../Shared/Buttons/LocationButton/LocationButton";
import HollowStar from "../../../Shared/Icons/HollowStar";
import FollowButton from "../../../Shared/Buttons/FollowButton/FollowButton";
import ShareButton from "../../../Shared/Buttons/ShareButton/ShareButton";
import RestaurantFeatures from "../RestaurantFeatures/RestaurantFeatures";
import Dropdown from "../../../Shared/Dropdown/Dropdown";
import "../../../Home/home.css";

const RightSide = () => {
  const follwerNum = "12.4k";
  const revNum = "473";
  const ratings = "4.7";
  const time = "10:00am-11:00pm";
  const distance = "800";
  const features = [
    "Burger Joint",
    "Parking Lot",
    "Smoking Zone",
    "Open space",
    "Online Payment",
  ];
  const selectedFeatures = ["Burger Joint", "Open space", "Online Payment"];

  const currentLoc = "Dhanmondi";
  const locs = ["Mohammadpur", "Gulshan", "Uttara", "Dhanmondi", "Khilgaon"];

  const RestFoods = ["Burger", "French Fries", "Shakes", "Chicken"];
  const selectedFoods = ["Burger", "French Fries"];
  let foundFoods = null;

  const [location, setlocation] = useState("");
  const handleFollow = () => {
    console.log("Follow this resturent");
  };

  const handleShare = () => {
    console.log("Sharing this resturent", location);
  };

  return (
    <div className=" ml-[100px] mt-[4rem] w-[45rem]">
      <div className=" flex flex-row justify-between">
        <h2 className=" text-xl font-bold text-LightBlack">Rest Name</h2>
        <div>
          <LocationButton></LocationButton>
        </div>
      </div>
      <div className=" flex flex-row ">
        <p className=" mr-2">{follwerNum + " Follwers"}</p>
        <p>{revNum + " Reviews"}</p>
      </div>
      <div className=" flex flex-row">
        <div className=" me-2">
          <HollowStar></HollowStar>
        </div>
        <div>
          <p>{ratings}</p>
        </div>
      </div>
      <div className=" block font-semibold">
        <p>
          <span className=" text-greenopen">Open Now: </span>
          {time}
        </p>
        <p>
          <span className=" text-deepRed">Distance: </span>
          {distance + "m from you"}
        </p>
      </div>
      <div className=" my-2 flex flex-row">
        <div className=" me-2">
          <FollowButton handleFollow={handleFollow}></FollowButton>
        </div>
        <div>
          <ShareButton handleShare={handleShare}></ShareButton>
        </div>
      </div>
      <div className=" my-5 w-[25rem] grid grid-cols-4 gap-1">
        {features.map((feature, index) => (
          <RestaurantFeatures
            key={index}
            text={feature}
            selected={selectedFeatures}
          ></RestaurantFeatures>
        ))}
      </div>
      <div className=" flex flex-row items-start">
        <div className=" cursor-pointer w-[9rem] h-[2rem] bg-seldFeature rounded mr-2">
          <Dropdown
            selected={currentLoc}
            options={locs}
            setParentData={setlocation}
          ></Dropdown>
        </div>
        <div className=" flex flex-row">
          {selectedFoods.map((food, index) => {
            foundFoods = RestFoods.find((foo) => foo === food);
            if (foundFoods) {
              return <p className="tag h-[2rem] p-0">{foundFoods}</p>;
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
