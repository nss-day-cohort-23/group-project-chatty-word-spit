"use strict";
let printToDom = require("./printtodom");

let currentTempForUser;

let weatherResponse = (weather) => {
    currentTempForUser = weather;
};

let getUserWeather = (userEntry) => {
    console.log(userEntry);
    if (userEntry.includes("weather")) {
        printToDom.createMsgDiv(userEntry);
        printToDom.createMsgDiv(currentTempForUser);
    } 
    else {
        printToDom.createMsgDiv(userEntry);
    }
};

module.exports = {getUserWeather, weatherResponse};