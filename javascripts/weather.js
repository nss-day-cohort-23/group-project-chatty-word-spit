"use strict";
let weatherCall = require('./printtodom');

window.onload = () => {
    let http = XMLHttpRequest();
    
    http.onreadystatechange = () => {
        if (http.readystate == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        }
    };

    http.open("GET", "http://api.wunderground.com/api/412bec35e927aae7/conditions/q/CA/San_Francisco.json", true);
    http.send();
};