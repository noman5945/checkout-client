import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home.css";
import Tags from "../../Shared/Tags/Tags";

const HomeLocation = () => {
  const [tags, setTags] = useState("");
  const [grouptags, setGroupTags] = useState([]);

  const handleDeleteChip = (idx) => {
    setGroupTags((grouptag) => grouptag.filter((_, index) => index !== idx));
  };
  const handleTag = (event) => {
    if (event.key === "Enter" && tags.trim() !== "") {
      setGroupTags([...grouptags, tags.trim()]);
      setTags("");
    }
  };

  const handleInputChange = (e) => {
    setTags(e.target.value);
  };

  return (
    <div className="location">
      <div className="tag-area">
        <ul>
          {grouptags.map((word, index) => {
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
            }}
            onChange={handleInputChange}
            value={tags}
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
