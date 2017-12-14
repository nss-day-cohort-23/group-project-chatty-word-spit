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

//adding in dummy argument//
let getUserWeather = (userEntry) => {
    let a = "API";
    let u = "user";
    console.log(userEntry);
    if (userEntry.includes("weather")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentTempForUser, a);
    } 
    else if (userEntry.includes("time")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentTimeForUser,a);
    }
    else if (userEntry.includes("rain") || userEntry.includes("snow")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentPrecipForUser,a);
    }
    else {
        printToDom.createMsgDiv(userEntry, u);
    }
};

module.exports = {getUserWeather, weatherResponse};