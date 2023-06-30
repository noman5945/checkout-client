import React, { useState } from "react";
import RadioButtonOptions from "../../Shared/RadioButtonOptions/RadioButtonOptions";
import { useNavigate } from "react-router-dom";

const RestNavBar = () => {
  const [feedActive, setFeedActive] = useState(true);
  const [aboutActive, setaboutActive] = useState(false);
  const [menuActive, setmenuActive] = useState(false);
  const [photosActive, setPhotosActive] = useState(false);
  const [revActive, setRevActive] = useState(false);
  const nav = useNavigate();

  const activateFeed = () => {
    setFeedActive(true);
    setaboutActive(false);
    setmenuActive(false);
    setPhotosActive(false);
    setRevActive(false);
    nav("/restaurant");
  };

  const activateAbout = () => {
    setFeedActive(false);
    setaboutActive(true);
    setmenuActive(false);
    setPhotosActive(false);
    setRevActive(false);
    nav("/restaurant/About");
  };

  const activateMenu = () => {
    setFeedActive(false);
    setaboutActive(false);
    setmenuActive(true);
    setPhotosActive(false);
    setRevActive(false);
    nav("/restaurant/Menu");
  };

  const activatePhoto = () => {
    setFeedActive(false);
    setaboutActive(false);
    setmenuActive(false);
    setPhotosActive(true);
    setRevActive(false);
    nav("/restaurant/Photos");
  };

  const activateRev = () => {
    setFeedActive(false);
    setaboutActive(false);
    setmenuActive(false);
    setPhotosActive(false);
    setRevActive(true);
    nav("/restaurant/Reviews");
  };

  return (
    <div className=" w-full my-[4rem] bg-NavBg flex flex-row items-center justify-between">
      <div className="flex flex-row py-3 px-8 items-center">
        <div className=" block">
          <p className=" text-lg font-bold">Starts From</p>
          <div className=" bg-LetWhite text-deepRed text-xl text-center rounded">
            <span>৳</span>
            350
          </div>
        </div>
        <div>
          <RadioButtonOptions></RadioButtonOptions>
        </div>
      </div>
      <div className=" text-lg font-semibold  ms-36 flex flex-row">
        {feedActive ? (
          <button className=" mr-12  text-deepRed border-b-4">Feed</button>
        ) : (
          <button
            className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
            onClick={activateFeed}
          >
            Feed
          </button>
        )}
        {aboutActive ? (
          <button className=" mr-12  text-deepRed border-b-4">About</button>
        ) : (
          <button
            className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
            onClick={activateAbout}
          >
            About
          </button>
        )}
        {menuActive ? (
          <button className=" mr-12  text-deepRed border-b-4">Menu</button>
        ) : (
          <button
            className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
            onClick={activateMenu}
          >
            Menu
          </button>
        )}
        {photosActive ? (
          <button className=" mr-12  text-deepRed border-b-4">Photos</button>
        ) : (
          <button
            className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
            onClick={activatePhoto}
          >
            Photos
          </button>
        )}
        {revActive ? (
          <button className=" mr-12  text-deepRed border-b-4">Reviews</button>
        ) : (
          <button
            className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
            onClick={activateRev}
          >
            Reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default RestNavBar;
