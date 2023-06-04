import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home.css";

const HomeLocation = () => {
  const [tags, setTags] = useState([]);

  const test = () => {
    console.log(tags, typeof tags);
    setTags((arr) => []);
  };

  const handleTag = (event) => {
    const value = event.target.value;
    if (
      (event.keyCode === 32 ||
        event.keyCode === 13 ||
        value[value.length - 1] === " ") &&
      !value.match(/^\s+$/gi) &&
      value !== ""
    ) {
      setTags(() => [value]);
    }
  };
  return (
    <div className="location">
      <div className="tag-area" onBlur={test}>
        <ul>
          <input
            type="text"
            class="tag-input"
            id="tag-input"
            onKeyDown={handleTag}
          />
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
