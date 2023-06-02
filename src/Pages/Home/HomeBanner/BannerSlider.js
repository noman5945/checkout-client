let slideIndex = 1;
showSlides(slideIndex);

export default function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document
    .getElementsByClassName("slider")[0]
    .getElementsByTagName("img");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + (slideIndex - 1) * 100 + "%)";
    slides[i].style.transition = "transform 0.8s ease-in-out"; // Add transition property for smooth animation
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
    dots[i].style.backgroundColor = ""; // Remove black color from all dots
  }

  dots[slideIndex - 1].className += " active"; // Add active class to current dot
  dots[slideIndex - 1].style.backgroundColor = "black"; // Add black color to current dot
}
