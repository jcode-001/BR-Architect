"use strict";

// when a user scroll, this function adds a box-shadow and
// a background color when they meet some specified condition
const addShadow = () => {
  const header = document.querySelector("header");
  const homeSection = document.getElementById("home");

  let divRect = homeSection.getBoundingClientRect();
  let homeTop = divRect.top;

  if (homeTop <= -300) {
    header.style.backgroundColor = "#ccc";
  } else if (homeTop > -307) {
    header.style.backgroundColor = "";
  }

  if (homeTop <= -17) {
    header.classList.add("br-shadow");
  } else if (homeTop > -17) {
    header.classList.remove("br-shadow");
  }
};

window.onscroll = function () {
  addShadow();
};

const updateYear = () => {
  const yearElem = document.getElementById("year");
  let date = new Date();
  let thisYear = date.getFullYear();
  yearElem.textContent = thisYear;
};
updateYear();
