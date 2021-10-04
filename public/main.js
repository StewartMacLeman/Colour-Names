"use strict";

// Global variables. ---------------------------------------------------
let colourBarDivs = document.querySelectorAll(".colourBar");
let coverModalDiv = document.querySelector(".colourModal");
let colourModalDiv = document.querySelector(".colourModal");
let closeModalButton = document.getElementById("closeBut");

let colBoxDiv = document.getElementById("colBox");
let nameParagraph = document.getElementById("nameText");
let rgbParagraph = document.getElementById("rgbText");
let hslParagraph = document.getElementById("hslText");
let hexParagraph = document.getElementById("hexText");

// Display the colour info modal. --------------------------------------
for (let i = 0; i < colourBarDivs.length; i++){
  colourBarDivs[i].addEventListener("click", displayInfo);
}

function displayInfo(e) {
  let clickedBar = e.target;
  // Get the name value.
  let innerNameDiv = clickedBar.querySelector(".colName");
  let innerName = innerNameDiv.getAttribute("value");
  // Get the rgb value.
  let innerRgbDiv = clickedBar.querySelector(".colRgb");
  let innerRgb = innerRgbDiv.getAttribute("value");
  // Get the hsl value.
  let innerHslDiv = clickedBar.querySelector(".colHsl");
  let innerHsl = innerHslDiv.getAttribute("value");
  // Get the hex value.
  let innerHexDiv = clickedBar.querySelector(".colHex");
  let innerHex = innerHexDiv.getAttribute("value");

  colBoxDiv.style.backgroundColor = innerName;
  nameParagraph.textContent = innerName;
  rgbParagraph.textContent = innerRgb;
  hslParagraph.textContent = innerHsl;
  hexParagraph.textContent = innerHex;

  coverModalDiv.classList.remove("hide");
  colourModalDiv.classList.remove("hide");
}

// Close the colour info model. ---------------------------------------
closeModalButton.addEventListener("click", closeModal);

function closeModal(){
  coverModalDiv.classList.add("hide");
  colourModalDiv.classList.add("hide");
}
