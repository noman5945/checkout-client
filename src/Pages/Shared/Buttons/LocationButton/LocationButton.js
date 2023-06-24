import React from "react";
import LocationIcon from "../../Icons/LocationIcon";

const LocationButton = () => {
  return (
    <button data-theme="mytheme" className="btn btn-outline btn-error btn-sm">
      Get Directions
      <LocationIcon></LocationIcon>
    </button>
  );
};

export default LocationButton;
