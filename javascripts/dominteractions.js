"use strict";
let printToDom = require('./printtodom');

let msgInput = document.getElementById("msgInput");
let darkCheckBox = document.getElementById("dark");
let sizeRange = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");
let mainWrapper = document.getElementById("mainWrapper");
let msgOutput = document.getElementById("msgOutput");
let textRap = document.getElementById("textSize");

msgInput.addEventListener("keyup", printToDom);
darkCheckBox.addEventListener("click", () => {
mainWrapper.classList.toggle("darkBackground");});  
sizeRange.addEventListener("change", ()=>{
textRap.setAttribute("class", `size-${sizeRange.value}`);});

clearButton.addEventListener("click", () => {
    msgOutput.innerHTML = '';
    msgInput.value = ''; });
