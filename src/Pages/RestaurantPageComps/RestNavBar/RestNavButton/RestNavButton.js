import React from "react";
import { useNavigate } from "react-router-dom";

const RestNavButton = ({ link, currentPage, handleButton, text }) => {
  const nav = useNavigate();
  const handleNavigation = () => {
    nav(link);
  };
  if (link === currentPage) {
    return <button className=" mr-12  text-deepRed border-b-4">{text}</button>;
  } else {
    return (
      <button
        className=" mr-12  hover:text-deepRed hover:transition duration-150 ease-in-out hover:border-b-4"
        onClick={handleNavigation}
      >
        {text}
      </button>
    );
  }
};

export default RestNavButton;
