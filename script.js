"use strict";

let chosenColor = document.querySelector("#start-color");
console.log(chosenColor);

document.querySelector("input").addEventListener("input", setColor);

function setColor() {
  let newColor = chosenColor.value;
  console.log(newColor);
  document.querySelector("#color-display").style.backgroundColor = newColor;
  setHex();
}
setColor();

function setHex() {
  let hexValue = chosenColor.value;
  document.querySelector(".hex").innerHTML = hexValue;
}

function setRgb() {
  let r = Number.parseInt(h, 16);
}
