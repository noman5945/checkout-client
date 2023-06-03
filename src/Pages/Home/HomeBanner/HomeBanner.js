import { useState } from "react";
import one from "../../../assets/HomeImages/1.jpg";
import two from "../../../assets/HomeImages/2.jpg";
import three from "../../../assets/HomeImages/3.jpg";
import checkoutLogo from "../../../assets/HomeImages/Checkout-white.png";
import "../home.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const mock = (n) => {
    setSlideIndex(n);
    let slides = document
      .getElementsByClassName("slider")[0]
      .getElementsByTagName("img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      console.log(slideIndex);
      slides[i].style.transform =
        "translateX(-" + (slideIndex - 1) * 100 + "%)";
      slides[i].style.transition = "transform 0.8s ease-in-out"; // Add transition property for smooth animation
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
      dots[i].style.backgroundColor = ""; // Remove black color from all dots
    }

    dots[slideIndex - 1].className += " active"; // Add active class to current dot
    dots[slideIndex - 1].style.backgroundColor = "black"; // Add black color to current dot
  };

  return (
    <header>
      <div className="slider-container">
        <div className="slider">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>
        <div className="dots-container">
          <span className="dot" onClick={() => mock(1)}></span>
          <span className="dot" onClick={() => mock(2)}></span>
          <span className="dot" onClick={() => mock(3)}></span>
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
