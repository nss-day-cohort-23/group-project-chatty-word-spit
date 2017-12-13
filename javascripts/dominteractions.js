"use strict";
require('./printtodom');

let msgInput = document.getElementById("msgInput");
let darkCheckBox = document.getElementById("dark");
let largeTextBox = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");

msgInput.addEventListener("keyup", arrayToMsg);
darkCheckBox.addEventListener("check");
largeTextBox.addEventListener("check");
clearButton.addEventListener("click");