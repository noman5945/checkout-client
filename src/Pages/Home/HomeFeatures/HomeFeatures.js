import React from "react";
import "../home.css";

const HomeFeatures = () => {
  return (
    <div>
      <div className="featurebar">
        <p>Add Features for Your Restaurant:</p>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Rooftop</label>
        <input type="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2">Smoking Zone</label>
        <input type="checkbox" id="checkbox3" />
        <label htmlFor="checkbox3">Open Space</label>
        <input type="checkbox" id="checkbox4" />
        <label htmlFor="checkbox4">Offers</label>
        <input type="checkbox" id="checkbox5" />
        <label htmlFor="checkbox5">Parking Space</label>
        <input type="checkbox" id="checkbox6" />
        <label htmlFor="checkbox6">Live Concert</label>
      </div>
      <p className="pricerange">Price Range(Ex: 500-1200)</p>

      <div className="home-radio">
        <div className="radio-container">
          <input type="radio" id="radio1" name="radio-group" />
          <label htmlFor="radio1" className="radio-button">
            1 Person
          </label>
        </div>

        <div className="radio-container">
          <input type="radio" id="radio2" name="radio-group" />
          <label htmlFor="radio2" className="radio-button">
            2 Persons
          </label>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
