"use strict";

// // Avatar
// const neck = document.querySelector(".neck");
// const mouth = document.querySelector(".mouth");
// const hair = document.querySelector(".hair");
// const leg = document.querySelector(".leg");
// const ears = document.querySelector(".ears");
// const eyes = document.querySelector(".eyes");

// // Buttons
// const hairB = document.querySelector(".btn_hair");
// const earsB = document.querySelector(".btn_ears");
// const eyesB = document.querySelector(".btn_eyes");
// const mouthB = document.querySelector(".btn_mouth");
// const neckB = document.querySelector(".btn_neck");
// const legB = document.querySelector(".btn_leg");
// const accessoriesB = document.querySelector(".btn_accessories");
// const backgroundB = document.querySelector(".btn_background");

// function which triggers when a primary button is clicked
// and populate secondary-buttons with appropriate ones
let primaryBtns = document.querySelectorAll(".primary_button");
primaryBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (localStorage.getItem("currentButton")) {
      document
        .getElementById(localStorage.getItem("currentButton"))
        .classList.toggle("active");
    }

    if (localStorage.getItem("currentMenu")) {
      document
        .getElementById(localStorage.getItem("currentMenu"))
        .classList.toggle("collapsed");
    }

    localStorage.setItem("currentButton", e.target.id);
    localStorage.setItem("currentMenu", "style-" + e.target.id);

    document
      .getElementById(localStorage.getItem("currentButton"))
      .classList.toggle("active");
    document
      .getElementById(localStorage.getItem("currentMenu"))
      .classList.toggle("collapsed");
  });
});

// fonction which populates secondary buttons regarding which
// primary button has been clicked
function displaySecondaryButtons(attribute) {}
