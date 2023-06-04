import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home.css";
import Tags from "../../Shared/Tags/Tags";

const HomeLocation = () => {
  const [tags, setTags] = useState("");
  const [grouptags, setGroupTags] = useState([]);

  const test = () => {
    console.log(tags, typeof tags);
    setGroupTags([tags.split(" ")]);
    //console.log(grouptags);
    setTags("");
  };
  const handleDeleteChip = () => {};
  const handleTag = (event) => {
    const value = event.target.value;
    if ((event.key === "Enter" || event.key === " ") && value !== "") {
      setTags(value.trim());
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
          {grouptags.map((word, index) => {
            return (
              <Tags
                key={index}
                word={word}
                handleDeleteChip={handleDeleteChip}
              ></Tags>
            );
          })}
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
