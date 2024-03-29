import React from "react";
import "../../../Home/home.css";

const RestaurantFilterFeature = ({ givenFeatures }) => {
  const features = [
    { feId: "checkbox1", name: "Smoking Zone" },
    { feId: "checkbox2", name: "Open Space" },
    { feId: "checkbox3", name: "Parking Space" },
    { feId: "checkbox4", name: "Live Concert" },
    { feId: "checkbox5", name: "Rooftop" },
    { feId: "checkbox6", name: "OnlinPayment" },
    { feId: "checkbox7", name: "Offers" },
    { feId: "checkbox8", name: "Others.." },
  ];

  const handleDefaultChecked = (feature) => {
    return givenFeatures.includes(feature.name);
  };

  return (
    <div className=" grid grid-cols-2">
      {features.map((feature, index) => {
        return (
          <div key={index} className="checkbox-container-rest">
            <input
              type="checkbox"
              id={feature.feId}
              value={feature.name}
              defaultChecked={handleDefaultChecked(feature)}
            />
            <label htmlFor={feature.feId}>{feature.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantFilterFeature;
