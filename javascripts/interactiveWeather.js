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
    let u = "user";
    let a = "API";
    if (userEntry.includes("weather")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentTempForUser, a);
    } 
    else if (userEntry.includes("time")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentTimeForUser, a);
    }
    else if (userEntry.includes("rain") || userEntry.includes("snow")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentPrecipForUser, a);
    }
    else {
        printToDom.createMsgDiv(userEntry, u);
    }
};

module.exports = {getUserWeather, weatherResponse};