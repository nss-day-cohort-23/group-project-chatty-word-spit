"use strict";
let manipulateData = require('./manipulatexhrdata');
let getWeather = require('./getWeatherData');

let msgRequest = new XMLHttpRequest();

const parseMsgData = () => {
    const defaultMsgArray = JSON.parse(event.target.responseText).messages;
    manipulateData(defaultMsgArray);
    
};

msgRequest.addEventListener("load", parseMsgData);
msgRequest.open("GET", "/JSON/rapbattle.json");
msgRequest.send();

let weatherRequest = new XMLHttpRequest();

let failToLoad = () => {
    console.log("did not get weather data");
};

let collectWeatherData = () => {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    getWeather.gatherWeather(weatherData);
};

weatherRequest.open("GET", "http://api.wunderground.com/api/412bec35e927aae7/conditions/q/CA/San_Francisco.json");

weatherRequest.addEventListener("load", collectWeatherData);
weatherRequest.addEventListener("error", failToLoad);

weatherRequest.send();

