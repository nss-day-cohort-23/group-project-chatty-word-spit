"use strict";
let printToDom = require("./printtodom");

let currentTempForUser;
let currentTimeForUser;
let currentPrecipForUser;
let currentWindForUser;
let currentWindChillForUser;

let weatherResponse = (weather, time, precipitation, wind, windChill) => {
    currentTempForUser = weather;
    currentTimeForUser = time;
    currentPrecipForUser = precipitation;
    currentWindForUser = wind;
    currentWindChillForUser = windChill;
};

//adding in dummy argument//
let getUserWeather = (userEntry) => {
    let a = "API";
    let u = "user";
    console.log(userEntry);
    if (userEntry.includes("weather") || userEntry.includes("temperature")) {
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
    else if (userEntry.includes("wind") && userEntry.includes("chill")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentWindChillForUser, a);
    }
    else if (userEntry.includes("wind")) {
        printToDom.createMsgDiv(userEntry, u);
        printToDom.createMsgDiv(currentWindForUser, a);
    }
    else {
        printToDom.createMsgDiv(userEntry, u);
    }
};

module.exports = {getUserWeather, weatherResponse};