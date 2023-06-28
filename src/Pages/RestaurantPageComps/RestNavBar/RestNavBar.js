import React from "react";
import RadioButtonOptions from "../../Shared/RadioButtonOptions/RadioButtonOptions";

const RestNavBar = () => {
  return (
    <div className=" w-full my-[4rem] bg-NavBg flex flex-row items-center">
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
        <button className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4">
          Feed
        </button>
        <button className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4">
          About
        </button>
        <button className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4">
          Menu
        </button>
        <button className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4">
          Photos
        </button>
        <button className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4">
          Reviews
        </button>
      </div>
    </div>
  );
};

export default RestNavBar;
