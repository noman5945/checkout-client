import React from "react";
import "../home.css";

const HomeFeatures = ({ setPersons, setFeatures, features }) => {
  const handleFeatureSet = (e) => {
    if (e.currentTarget.checked) {
      setFeatures([...features, e.currentTarget.value]);
    } else if (!e.currentTarget.checked) {
      const res = features.filter(
        (feature) => feature !== e.currentTarget.value
      );
      setFeatures(res);
    }
  };
  return (
    <div>
      <div className="featurebar">
        <p>Add Features for Your Restaurant:</p>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="checkbox1"
          value={"Rooftop"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox1">Rooftop</label>
        <input
          type="checkbox"
          id="checkbox2"
          value={"Smoking Zone"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox2">Smoking Zone</label>
        <input
          type="checkbox"
          id="checkbox3"
          value={"Open Space"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox3">Open Space</label>
        <input
          type="checkbox"
          id="checkbox4"
          value={"Offers"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox4">Offers</label>
        <input
          type="checkbox"
          id="checkbox5"
          value={"Parking Space"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox5">Parking Space</label>
        <input
          type="checkbox"
          id="checkbox6"
          value={"Live Concert"}
          onChange={(e) => handleFeatureSet(e)}
        />
        <label htmlFor="checkbox6">Live Concert</label>
      </div>
      <p className="pricerange">Price Range(Ex: 500-1200)</p>

      <div className="home-radio">
        <div className="radio-container">
          <input
            type="radio"
            id="radio1"
            name="radio-group"
            value={1}
            onChange={(e) => {
              setPersons(e.currentTarget.value);
            }}
          />
          <label htmlFor="radio1" className="radio-button">
            1 Person
          </label>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            id="radio2"
            name="radio-group"
            value={2}
            onChange={(e) => {
              setPersons(e.currentTarget.value);
            }}
          />
          <label htmlFor="radio2" className="radio-button">
            2 Persons
          </label>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
