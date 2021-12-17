"use strict";

let primaryBtns = document.querySelectorAll(".primary_button");
let previousSelectedButtonId = localStorage.getItem("activeButtonId");

primaryBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (previousSelectedButtonId) {
      hidePreviousMenuButton(previousSelectedButtonId);
    }

    displayMenuButton(e.target.id);
    previousSelectedButtonId = e.target.id;

    localStorage.setItem("activeButtonId", previousSelectedButtonId);

    createEventListenerOnMenuButtons(previousSelectedButtonId);
  });
});

let randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", (e) => {
  randomGeneration();
});

let downloadButton = document.getElementById("download-button");
// downloadButton.addEventListener("click", function () {
//   html2canvas(document.querySelector(".alpacaImg")).then((canvas) => {
//     let a = document.createElement("a");
//     a.href = canvas
//       .toDataURL("image/jpeg")
//       .replace("image/jpeg", "image/octet-stream");

//     a.download = "Alpaca.jpg";
//     a.click();
//   });
// });

downloadButton.addEventListener("click", function () {
  html2canvas(document.getElementById("avatar-img")).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");

    a.download = "Alpaca.jpg";
    a.click();
  });
});

// function to randomize avatar creation
function randomGeneration() {
  // loop through primary buttons
  var primaryButtons = Array.from(
    document
      .getElementById("primary-buttons-list")
      .getElementsByTagName("button")
  );
  primaryButtons.forEach((primaryButton) => {
    // loop through secondary buttons to remove 'active' class
    var secondaryButtons = Array.from(
      document
        .getElementById("style-" + primaryButton.id)
        .getElementsByTagName("button")
    );
    secondaryButtons.forEach((secondaryButton) => {
      secondaryButton.classList.remove("active");
    }); // secondary loop

    // select a random button
    var toActivateButton =
      secondaryButtons[Math.floor(Math.random() * secondaryButtons.length)];
    toActivateButton.classList.add("active");

    var layerId = "avatar-" + primaryButton.id;
    var newElement = toActivateButton.getAttribute("data-name");

    console.log(layerId, newElement);
    changeAvatarLayerSrcImg(layerId, newElement);
  }); // primary loop
} // function random

// function to download avatar
function downloadAvatar() {
  download.addEventListener("click", function () {
    html2canvas(document.querySelector(".alpacaImg")).then((canvas) => {
      let a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");

      a.download = "Alpaca.jpg";
      a.click();
    });
  });
}

function createEventListenerOnMenuButtons(activeButtonId) {
  var activeMenuId = "style-" + activeButtonId;
  var activeMenuButtons = Array.from(
    document.getElementById(activeMenuId).getElementsByTagName("button")
  );
  var layerId = "avatar-" + activeButtonId;

  activeMenuButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      var newElement = e.target.getAttribute("data-name");
      changeAvatarLayerSrcImg(layerId, newElement);
    }); // event listener
  }); // forEach buttons
} // function createEventListenerOnMenuButtons

// Function which changes src img of the layer specified as
// parameter
function changeAvatarLayerSrcImg(layerId, newElement) {
  var folderImg = layerId.substr(7);
  document.getElementById(layerId).src =
    "img/" + folderImg + "/" + newElement + ".png";
}

// function which hide secondary menu depending which primary
// button is clicked
function hidePreviousMenuButton(primaryButtonId) {
  var secondaryMenuId = "style-" + primaryButtonId;
  document.getElementById(secondaryMenuId).classList.add("collapsed");
}
// function which display secondary menu depending which primary
// button is clicked
function displayMenuButton(primaryButtonId) {
  var secondaryMenuId = "style-" + primaryButtonId;

  document.getElementById(primaryButtonId).classList.add("active");
  document.getElementById(secondaryMenuId).classList.remove("collapsed");
}

// function which creates "clicked" event listener on secondary
// buttons displayed

// fonction which change avatar image according to active button
function changeAvatar() {
  var activeMenuId = localStorage.getItem("currentMenuId");
  var menu = document.getElementById(activeMenuId);
  var menuButtons = Array.from(menu.getElementsByTagName("button"));
  var imgLayer = document.getElementsByClassName(
    localStorage.getItem("currentButtonId")
  );
  var activeButton;

  menuButtons.forEach((element) => {
    if (element.classList.contains("active")) {
      activeButton = element;
    }
  });

  console.log(activeButton);
  console.log(menuButtons);

  menuButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (activeButton) {
        activeButton.classList.toggle("active");
      }

      e.target.classList.toggle("active");
      activeButton = e.target;
    });
  });
}
