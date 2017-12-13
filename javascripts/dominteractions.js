"use strict";
let printToDom = require('./printtodom');


let msgInput = document.getElementById("msgInput");
let themesBox = document.getElementById("themes");
let sizeRange = document.getElementById("large");
let clearButton = document.getElementById("clearMsgs");
let mainWrapper = document.getElementById("mainWrapper");
let msgOutput = document.getElementById("msgOutput");
let textRap = document.getElementById("textSize");

msgInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        let userMsg = msgInput.value;
        printToDom.createMsgDiv(userMsg);
        msgInput.value = "";
    }
});

// darkCheckBox.addEventListener("click", () => {
// mainWrapper.classList.toggle("darkBackground");});  

// largeTextBox.addEventListener("click", ()=>{
// mainWrapper.classList.toggle("makeItBig");});


themesBox.addEventListener("change", () => {
mainWrapper.setAttribute("class", `theme-${themesBox.value}`);});    
sizeRange.addEventListener("change", ()=>{
textRap.setAttribute("class", `size-${sizeRange.value}`);});
clearButton.addEventListener("click", () => {
    msgOutput.innerHTML = '';
    msgInput.value = ''; });
