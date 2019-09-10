"use strict";

window.addEventListener("DOMcontentLoaded", selectColor);

const colorPicker = document.querySelector("#start-color");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);

  document.querySelector("#color-display").style.backgroundColor = color;
  document.querySelector(".hex").innerHTML = color;

  function hex2rgb(hexcolor) {
    let r = Number.parseInt(hexcolor.substring(1, 3), 16);
    let g = Number.parseInt(hexcolor.substring(3, 5), 16);
    let b = Number.parseInt(hexcolor.substring(5, 7), 16);

    document.querySelector(".rgb").innerHTML = `rgb ${r}, ${g}, ${b}`;
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

      document.querySelector(".hsl").innerHTML = `hsl ${h}, ${s}, ${l}`;
    }
  }

  hex2rgb(color);
}
