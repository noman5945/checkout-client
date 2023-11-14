import React from "react";
import "../../Home/home.css";
//import { Link } from "react-router-dom";

const SearchButton = ({ onClickFunc }) => {
  return (
    <div>
      <button type="submit" className="searchbutton" onClick={onClickFunc}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;
