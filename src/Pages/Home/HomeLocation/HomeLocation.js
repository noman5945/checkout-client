import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home.css";
import Tags from "../../Shared/Tags/Tags";

const HomeLocation = () => {
  const [tags, setTags] = useState("");
  let [grouptags, setGroupTags] = useState([]);

  const test = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //console.log(tags.split(" "));
      setGroupTags(tags.split(" "));
      console.log(grouptags);
      //setTags("");
      event.target.value = "";
    }
  };
  const handleDeleteChip = (idx) => {
    setGroupTags((grouptag) => grouptag.filter((_, index) => index !== idx));
    //console.log(idx);
  };
  const handleTag = (event) => {
    const value = event.target.value;
    if (value !== "") {
      setTags(value);
    }
  };
  return (
    <div className="location">
      <div className="tag-area">
        <ul>
          {grouptags.map((word, index) => {
            //console.log(index + " " + word);
            return (
              <Tags
                key={index}
                word={word}
                handleDeleteChip={() => handleDeleteChip(index)}
              ></Tags>
            );
          })}
          <input
            type="text"
            class="tag-input"
            id="tag-input"
            onKeyDown={(e) => {
              handleTag(e);
              test(e);
            }}
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
