import React from "react";
import "../../Home/home.css";
import { Link } from "react-router-dom";

const SearchButton = ({ link, onClickFunc }) => {
  return (
    <div>
      <Link to={link}>
        <button type="submit" className="searchbutton" onClick={onClickFunc}>
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchButton;
