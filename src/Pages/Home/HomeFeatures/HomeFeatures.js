import React from "react";
import "../home.css";

const HomeFeatures = () => {
  return (
    <div>
      <div className="featurebar">
        <p>Add Features For Your Restaurant:</p>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="checkbox1" />
        <label for="checkbox1">Rooftop</label>
        <input type="checkbox" id="checkbox2" />
        <label for="checkbox2">Smoking Zone</label>
        <input type="checkbox" id="checkbox3" />
        <label for="checkbox3">Open Space</label>
        <input type="checkbox" id="checkbox4" />
        <label for="checkbox4">Offers</label>
        <input type="checkbox" id="checkbox5" />
        <label for="checkbox5">Parking Space</label>
        <input type="checkbox" id="checkbox6" />
        <label for="checkbox6">Live Concert</label>
      </div>
      <p className="pricerange">Price Range(Ex: 500-1200)</p>

      <div class="radio">
        <div class="radio-container">
          <input type="radio" id="radio1" name="radio-group" />
          <label for="radio1" class="radio-button">
            1 Person
          </label>
        </div>

        <div className="radio-container">
          <input type="radio" id="radio2" name="radio-group" />
          <label for="radio2" className="radio-button">
            2 Persons
          </label>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
