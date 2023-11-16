import React, { useState } from "react";
import "../home.css";
import Tags from "../../Shared/Tags/Tags";
import Dropdown from "../../Shared/Dropdown/Dropdown";

const HomeLocation = ({ setFoodKeys, foodKeys, setLocation }) => {
  const [tags, setTags] = useState("");
  //const [grouptags, setGroupTags] = useState([]);
  //const [locations,setlocations]=useState('Dhanmondi')

  const currentLoc = "Set Location";
  const locs = [
    "Mohammedpur",
    "Gulshan",
    "Uttara",
    "Dhanmondi",
    "Khilgaon",
    "Set Location",
  ];

  const handleDeleteChip = (idx) => {
    setFoodKeys((grouptag) => grouptag.filter((_, index) => index !== idx));
  };
  const handleTag = (event) => {
    if (event.key === "Enter" && tags.trim() !== "") {
      setFoodKeys([...foodKeys, tags.trim()]);
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
          {foodKeys.map((word, index) => {
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
            className="tag-input"
            id="tag-input"
            onKeyDown={(e) => {
              handleTag(e);
            }}
            onChange={handleInputChange}
            value={tags}
          />
        </ul>
      </div>
      <div className=" dropbtn">
        <Dropdown
          selected={currentLoc}
          setParentData={setLocation}
          options={locs}
        ></Dropdown>
      </div>
    </div>
  );
};

export default HomeLocation;
