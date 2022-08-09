"use strict";
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerOverlay = document.querySelector(".overlay");
const hamburgerClose = document.querySelector(".close");

const hideAndShow = function () {
  hamburgerMenu.classList.toggle("hidden");
  hamburgerClose.classList.toggle("hidden");
  hamburgerOverlay.classList.toggle("hidden");
};

hamburgerIcon.addEventListener("click", function () {
  hideAndShow();
});

hamburgerClose.addEventListener("click", function () {
  hideAndShow();
});
