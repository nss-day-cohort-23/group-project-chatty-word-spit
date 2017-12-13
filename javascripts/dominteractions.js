"use strict";
let printToDom = require('./printtodom');

let msgInput = document.getElementById("msgInput");
let themesBox = document.getElementById("themes");
let sizeRange = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");
let mainWrapper = document.getElementById("mainWrapper");
let msgOutput = document.getElementById("msgOutput");
let textRap = document.getElementById("textSize");

msgInput.addEventListener("keyup", printToDom);
themesBox.addEventListener("change", () => {
mainWrapper.setAttribute("class", `theme-${themesBox.value}`);});    
sizeRange.addEventListener("change", ()=>{
textRap.setAttribute("class", `size-${sizeRange.value}`);});
clearButton.addEventListener("click", () => {
    msgOutput.innerHTML = '';
    msgInput.value = ''; });
