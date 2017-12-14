"use strict";

let userInteract = require('./interactiveWeather');

module.exports.gatherWeather = (currentData) => {
    let currentTemp = currentData.current_observation.feelslike_f;
    console.log(currentTemp);
    userInteract.weatherResponse(currentTemp);
};