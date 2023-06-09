import React from "react";
import StarIcon from "../../Shared/Icons/StarIcon";

const RestaurantListCard = ({ resturant, time }) => {
  const { img, name, opening, closing, WorkTime, lowestPrice, ratings } =
    resturant;
  const { currentTime, dayCheck } = time;
  const globalClosing = parseInt(closing.split(":")[0]) + 12;
  const openCheck =
    opening.split(":")[0] < currentTime.split(":")[0] &&
    globalClosing.toString() > currentTime.split(":")[0] &&
    dayCheck === WorkTime
      ? true
      : false;
  console.log(
    openCheck +
      " " +
      opening.split(":")[0] +
      " " +
      closing.split(":")[0] +
      " " +
      currentTime.split(":")[0]
  );
  const openColor = openCheck ? "text-greenopen" : "text-deepRed";
  const openText = openCheck ? "Open Now :" : "Closed :";
  return (
    <div className=" bg-fadedbg p-4 h-[105px] w-[700px] rounded-lg my-4 hover:bg-deepfadebg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <img className=" h-[75px] w-[75px] rounded-full" src={img} alt="" />
          <div className=" ms-5">
            <h2 className=" font-bold text-lg">{name}</h2>
            <p className=" font-semibold text-xs">
              <span className={openColor}>{openText}</span>
              {opening}-{closing}
            </p>
            <p className="text-xs text-deepRed">Distance:</p>
            <p>
              Starts from:{" "}
              <span className=" text-deepRed">{lowestPrice} BDT</span>{" "}
            </p>
          </div>
        </div>
        <div className="block">
          <div className="flex flex-row">
            <StarIcon></StarIcon>
            <p className=" font-bold">{ratings} Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListCard;
