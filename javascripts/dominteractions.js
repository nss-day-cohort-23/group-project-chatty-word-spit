"use strict";
let printToDom = require('./interactiveWeather');


let msgInput = document.getElementById("msgInput");
let themesBox = document.getElementById("themes");
let sizeRange = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");
let mainWrapper = document.getElementById("mainWrapper");
let msgOutput = document.getElementById("msgOutput");
let textRap = document.getElementById("textSize");
let bodyChange = document.querySelector("body");
let nukeIt = document.getElementById("nukeIt");

msgInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 && msgInput.value.length > 1) {
        let userMsg = msgInput.value;
        printToDom.getUserWeather(userMsg);
        msgInput.value = "";
    }
});

// darkCheckBox.addEventListener("click", () => {
// mainWrapper.classList.toggle("darkBackground");});  

// largeTextBox.addEventListener("click", ()=>{
// mainWrapper.classList.toggle("makeItBig");});


themesBox.addEventListener("change", () => {
mainWrapper.setAttribute("class", `theme-${themesBox.value}`);});
themesBox.addEventListener("change", () => {
    bodyChange.setAttribute("class", `theme-${themesBox.value}`);});     
sizeRange.addEventListener("change", ()=>{
textRap.setAttribute("class", `size-${sizeRange.value}`);});
clearButton.addEventListener("click", () => {
    msgOutput.innerHTML = '';
    msgInput.value = ''; });
nukeIt.addEventListener("click", ()=>{
    bodyChange.innerHTML = '';
});

    
