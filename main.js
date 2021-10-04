"use strict";

// Global variables. ---------------------------------------------------

let colourBarDivs = document.querySelectorAll(".colourBar");

// Display the colour info modal. --------------------------------------

for (let i = 0; i < colourBarDivs.length; i++){
  colourBarDivs[i].addEventListener("click", displayInfo);
}

function displayInfo() {
  // Temp functionality.
  console.log("A box has been clicked!");
}
