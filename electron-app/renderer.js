// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { increment } = require("../native-increment");

const $number = document.querySelector("#number");
const $incrementButton = document.querySelector("#increment");

let number = 0;

function renderResult() {
  $number.innerHTML = number;
}

$incrementButton.addEventListener("click", () => {
  number = increment(number);
  renderResult();
});

renderResult();
