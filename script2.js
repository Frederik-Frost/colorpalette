"use strict";

window.addEventListener("DOMcontentLoaded", selectColor);

const colorPicker = document.querySelector("#start-color");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);

  document.querySelector("#color-display").style.backgroundColor = color;
  document.querySelector(".hex").innerHTML = `HEX ${color}`;

  function hex2rgb(hexcolor) {
    let r = Number.parseInt(hexcolor.substring(1, 3), 16);
    let g = Number.parseInt(hexcolor.substring(3, 5), 16);
    let b = Number.parseInt(hexcolor.substring(5, 7), 16);

    document.querySelector(".rgb").innerHTML = `rgb (${r}, ${g}, ${b})`;
    rgb2hsl();
    function rgb2hsl() {
      r /= 255;
      g /= 255;
      b /= 255;

      let h, s, l;

      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);

      if (max === min) {
        h = 0;
      } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
      } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
      } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
      }

      if (h < 0) {
        h = h + 360;
      }

      l = (min + max) / 2;

      if (max === 0 || min === 1) {
        s = 0;
      } else {
        s = (max - l) / Math.min(l, 1 - l);
      }
      // multiply s and l by 100 to get the value in percent, rather than [0,1]
      s *= 100;
      l *= 100;

      console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

      document.querySelector(".hsl").innerHTML = `hsl (${h}, ${s}%, ${l}%)`;

      getSelectedValue();

      function getSelectedValue() {
        let selectedValue = document.querySelector("#theme").value;
        console.log(selectedValue);

        if (selectedValue == "analogue") {
          analogue(h, s, l);
        } else if (selectedValue == "monochrome") {
          monochrome(h, s, l);
        } else if (selectedValue == "triad") {
          triad(h, s, l);
        }

        colorCodeRGB(h, s, l);
      }
    }
  }

  hex2rgb(color);
}

function analogue(h, s, l) {
  let colorOne = h + 30;
  let colorTwo = colorOne + 30;
  let colorThree = h - 30;
  let colorFour = colorThree - 30;

  document.querySelector(
    "#color-one"
  ).style.backgroundColor = `hsl(${colorOne}, ${s}%, ${l}%)`;
  document.querySelector(
    ".one-hsl"
  ).innerHTML = `hsl(${colorOne}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-two"
  ).style.backgroundColor = `hsl(${colorTwo}, ${s}%, ${l}%)`;
  document.querySelector(
    ".two-hsl"
  ).innerHTML = `hsl(${colorTwo}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-three"
  ).style.backgroundColor = `hsl(${colorThree}, ${s}%, ${l}%)`;
  document.querySelector(
    ".three-hsl"
  ).innerHTML = `hsl(${colorThree}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-four"
  ).style.backgroundColor = `hsl(${colorFour}, ${s}%, ${l}%)`;
  document.querySelector(
    ".four-hsl"
  ).innerHTML = `hsl(${colorFour}, ${s}%, ${l}%)`;
}

function monochrome(h, s, l) {
  let mColorOne = l + 10;
  let mColorTwo = mColorOne + 10;
  let mColorThree = l - 10;
  let mColorFour = mColorThree - 10;

  document.querySelector(
    "#color-one"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${mColorOne}%)`;
  document.querySelector(
    ".one-hsl"
  ).innerHTML = `hsl(${h}, ${s}%, ${mColorOne}%)`;

  document.querySelector(
    "#color-two"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${mColorTwo}%)`;
  document.querySelector(
    ".two-hsl"
  ).innerHTML = `hsl(${h}, ${s}%, ${mColorTwo}%)`;
  document.querySelector(
    "#color-three"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${mColorThree}%)`;
  document.querySelector(
    ".three-hsl"
  ).innerHTML = `hsl(${h}, ${s}%, ${mColorThree}%)`;
  document.querySelector(
    "#color-four"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${mColorFour}%)`;
  document.querySelector(
    ".four-hsl"
  ).innerHTML = `hsl(${h}, ${s}%, ${mColorFour}%)`;
}

function triad(h, s, l) {
  let tColorOne = h + 60;
  let tColorTwo = tColorOne + 60;
  let tColorThree = h - 60;
  let tColorFour = tColorThree - 60;

  document.querySelector(
    "#color-one"
  ).style.backgroundColor = `hsl(${tColorOne}, ${s}%, ${l}%)`;
  document.querySelector(
    ".one-hsl"
  ).innerHTML = `hsl(${tColorOne}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-two"
  ).style.backgroundColor = `hsl(${tColorTwo}, ${s}%, ${l}%)`;
  document.querySelector(
    ".two-hsl"
  ).innerHTML = `hsl(${tColorTwo}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-three"
  ).style.backgroundColor = `hsl(${tColorThree}, ${s}%, ${l}%)`;
  document.querySelector(
    ".three-hsl"
  ).innerHTML = `hsl(${tColorThree}, ${s}%, ${l}%)`;
  document.querySelector(
    "#color-four"
  ).style.backgroundColor = `hsl(${tColorFour}, ${s}%, ${l}%)`;
  document.querySelector(
    ".four-hsl"
  ).innerHTML = `hsl(${tColorFour}, ${s}%, ${l}%)`;
}

function colorCodeRGB() {
  let oneRGB = document.querySelector("#color-one").style.backgroundColor;
  let twoRGB = document.querySelector("#color-two").style.backgroundColor;
  let threeRGB = document.querySelector("#color-three").style.backgroundColor;
  let fourRGB = document.querySelector("#color-four").style.backgroundColor;

  rgbSeperater("one", oneRGB);
  rgbSeperater("two", twoRGB);
  rgbSeperater("three", threeRGB);
  rgbSeperater("four", fourRGB);

  document.querySelector(".one-rgb").innerHTML = oneRGB;
  document.querySelector(".two-rgb").innerHTML = twoRGB;
  document.querySelector(".three-rgb").innerHTML = threeRGB;
  document.querySelector(".four-rgb").innerHTML = fourRGB;
  function rgbSeperater(boxNumber, RGBValue) {
    RGBValue = RGBValue.split(",");
    let r = RGBValue[0].slice(4);
    r = parseInt(r, 10);
    let g = RGBValue[1].trim();
    g = parseInt(g, 10);

    let b = RGBValue[2].slice(0, -1).trim();
    b = parseInt(b, 10);
    let rgb = {};
    rgb.r = r;
    rgb.g = g;
    rgb.b = b;
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", RGBValue);

    let rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }

      return hex;
    };
    let fullColorHex = function(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };
    document.querySelector(
      `.${boxNumber}-hex`
    ).textContent = `HEX: #${fullColorHex(r, g, b)}`;
  }
}
