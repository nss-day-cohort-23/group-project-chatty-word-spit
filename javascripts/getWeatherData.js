"use strict";

let userInteract = require('./interactiveWeather');

module.exports.gatherWeather = (currentData) => {
    let currentTemp = currentData.current_observation.temperature_string;
    let currentTime = currentData.current_observation.local_time_rfc822;    
    let currentPrecip = currentData.current_observation.precip_today_string;    
    let currentWind = currentData.current_observation.wind_string;    
    let currentWindChill = currentData.current_observation.windchill_f;    
    userInteract.weatherResponse(currentTemp, currentTime, currentPrecip, currentWind, currentWindChill);
};