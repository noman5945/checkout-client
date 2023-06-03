import React from "react";
import { Link } from "react-router-dom";

const HomeLocation = () => {
  return (
    <div className="location">
      <div className="tag-area">
        <ul>
          <input type="text" class="tag-input" id="tag-input" />
        </ul>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Select a Location</button>
        <div className="dropdown-content">
          <Link data-location="Location 1">Location 1</Link>
          <Link data-location="Location 2">Location 2</Link>
          <Link data-location="Location 3">Location 3</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
