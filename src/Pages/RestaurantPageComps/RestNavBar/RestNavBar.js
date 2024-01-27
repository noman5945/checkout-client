import React from "react";
import RadioButtonOptions from "../../Shared/RadioButtonOptions/RadioButtonOptions";
import { useLocation } from "react-router-dom";
import RestNavButton from "./RestNavButton/RestNavButton";

const RestNavBar = ({ id, lowestCost }) => {
  const currentPage = useLocation();
  console.log(currentPage.pathname);
  console.log(id);

  const navOptions = [
    {
      name: "Feed",
      link: `/restaurant/${id}`,
    },
    {
      name: "About",
      link: `/restaurant/${id}/About`,
    },
    {
      name: "Menu",
      link: `/restaurant/${id}/Menu`,
    },
    {
      name: "Photos",
      link: `/restaurant/${id}/Photos`,
    },
    {
      name: "Reviews",
      link: `/restaurant/${id}/Reviews`,
    },
  ];

  return (
    <div className=" w-full my-[4rem] bg-NavBg flex flex-row items-center justify-between">
      <div className="flex flex-row py-3 px-8 items-center">
        <div className=" block">
          <p className=" text-lg font-bold">Starts From</p>
          <div className=" bg-LetWhite text-deepRed text-xl text-center rounded">
            <span>৳</span>
            {lowestCost}
          </div>
        </div>
        <div>
          <RadioButtonOptions></RadioButtonOptions>
        </div>
      </div>
      <div className=" text-lg font-semibold  ms-36 flex flex-row">
        {navOptions.map((navOption, index) => {
          return (
            <RestNavButton
              key={index}
              link={navOption.link}
              currentPage={currentPage.pathname}
              text={navOption.name}
            ></RestNavButton>
          );
        })}
      </div>
    </div>
  );
};

export default RestNavBar;
