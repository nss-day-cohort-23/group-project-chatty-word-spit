"use strict";
let printToDom = require('./printtodom');

let msgInput = document.getElementById("msgInput");
let darkCheckBox = document.getElementById("dark");
let largeTextBox = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");
let mainWrapper = document.getElementById("mainWrapper");
let msgOutput = document.getElementById("msgOutput");

msgInput.addEventListener("keyup", printToDom);
darkCheckBox.addEventListener("click", () => {
mainWrapper.classList.toggle("darkBackground");});  
largeTextBox.addEventListener("click", ()=>{
mainWrapper.classList.toggle("makeItBig");});
clearButton.addEventListener("click", () => {
    msgOutput.innerHTML = '';
    msgInput.value = ''; });
