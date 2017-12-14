"use strict";


let manipulateData = require('./manipulatexhrdata');
let getWeather = require('./getWeatherData');

let msgRequest = new XMLHttpRequest();

const parseMsgData = () => {
    console.log(event.target.responseText);
    const defaultMsgArray = JSON.parse(event.target.responseText);
    manipulateData(defaultMsgArray);
    
};

msgRequest.addEventListener("load", parseMsgData);
msgRequest.open("GET", "https://word-spit.firebaseio.com/messages/messages.json");
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
let APIKey = require('./secretKey');
weatherRequest.open("GET", `http://api.wunderground.com/api/${APIKey}/conditions/q/TN/Nashville.json`);

weatherRequest.addEventListener("load", collectWeatherData);
weatherRequest.addEventListener("error", failToLoad);

weatherRequest.send();

