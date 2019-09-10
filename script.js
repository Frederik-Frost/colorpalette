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

function hex2rgb(hexcolor) {
  const r = Number.parseInt(hexcolor.substring(1, 3), 16);
  const g = Number.parseInt(hexcolor.substring(3, 5), 16);
  const b = Number.parseInt(hexcolor.substring(5, 7), 16);

  //   const arr = [r, g, b];
  //   return arr;

  return { r, g, b };
}

const hex = hex2rgb("#ff2049");
