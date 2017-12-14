"use strict";
let printToDom = require("./printtodom");

let currentTempForUser;
let currentTimeForUser;
let currentPrecipForUser;

let weatherResponse = (weather, time, precipitation) => {
    currentTempForUser = weather;
    currentTimeForUser = time;
    currentPrecipForUser = precipitation;
};

let getUserWeather = (userEntry) => {
    console.log(userEntry);
    if (userEntry.includes("weather")) {
        printToDom.createMsgDiv(userEntry);
        printToDom.createMsgDiv(currentTempForUser);
    } 
    else if (userEntry.includes("time")) {
        printToDom.createMsgDiv(userEntry);
        printToDom.createMsgDiv(currentTimeForUser);
    }
    else if (userEntry.includes("rain") || userEntry.includes("snow")) {
        printToDom.createMsgDiv(userEntry);
        printToDom.createMsgDiv(currentPrecipForUser);
    }
    else {
        printToDom.createMsgDiv(userEntry);
    }
};

module.exports = {getUserWeather, weatherResponse};