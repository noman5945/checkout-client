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

///pricerange

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".sliderr .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

const tagInput = document.querySelector(".tag-input");
const tagArea = document.querySelector(".tag-area");
const ul = document.querySelector(".tag-area ul");
//const label = document.querySelector(".label");

let tags = [];

function addEvent(element) {
  tagArea.addEventListener("click", () => {
    element.focus();
  });

  element.addEventListener("focus", () => {
    tagArea.classList.add("active");
    //label.classList.add("label-active");
  });

  element.addEventListener("blur", (e) => {
    tagArea.classList.remove("active");
    if (element.value === "" && tags.length === 0) {
      //label.classList.remove("label-active");
    }
    if (!element.value.match(/^\s+$/gi) && element.value !== "") {
      tags.push(e.target.value.trim());
      element.value = "";
      renderTags();
    }
  });

  element.addEventListener("keydown", (e) => {
    console.log(e);
    const value = e.target.value;
    if (
      (e.keyCode === 32 ||
        e.keyCode === 13 ||
        value[value.length - 1] === " ") &&
      !value.match(/^\s+$/gi) &&
      value !== ""
    ) {
      tags.push(e.target.value.trim());
      element.value = "";
      renderTags();
    }
    if (e.keyCode === 8 && value === "") {
      tags.pop();
      renderTags();
    }
  });
}

// tag input
addEvent(tagInput);

function renderTags() {
  ul.innerHTML = "";
  tags.forEach((tag, index) => {
    createTag(tag, index);
  });
  const input = document.createElement("input");
  input.type = "text";
  input.className = "tag-input";
  addEvent(input);
  ul.appendChild(input);
  input.focus();
  setTimeout(() => (input.value = ""), 0);
}

function createTag(tag, index) {
  const li = document.createElement("li");
  li.className = "tag";
  const text = document.createTextNode(tag);
  const span = document.createElement("span");
  span.className = "cross";
  span.dataset.index = index;
  span.addEventListener("click", (e) => {
    tags = tags.filter((_, index) => index !== e.target.dataset.index);
    renderTags();
  });
  li.appendChild(text);
  li.appendChild(span);
  ul.appendChild(li);
}
