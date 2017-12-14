"use strict";

let userInteract = require('./interactiveWeather');

module.exports.gatherWeather = (currentData) => {
    let currentTemp = currentData.current_observation.temp_f;
    let currentTime = currentData.current_observation.local_time_rfc822;    
    let currentPrecip = currentData.current_observation.precip_today_string;    
    userInteract.weatherResponse(currentTemp, currentTime, currentPrecip);
};