import React from "react";
import one from "../../../assets/HomeImages/1.jpg";
import two from "../../../assets/HomeImages/2.jpg";
import three from "../../../assets/HomeImages/3.jpg";
import checkoutLogo from "../../../assets/HomeImages/Checkout-white.png";
import "../home.css";
import { Link } from "react-router-dom";
//import currentSlide from "./BannerSlider";

const HomeBanner = () => {
  //onClick={() => currentSlide(1)}
  return (
    <header>
      <div className="slider-container">
        <div className="slider">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>
        <div className="dots-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <Link to="/">
            <img src={checkoutLogo} alt="Example" />
          </Link>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="login-button">
          <a className="logintext" href="Login.html">
            {" "}
            Login/Sign up{" "}
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;
