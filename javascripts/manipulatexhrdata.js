"use strict";
let printToDom = require('./printtodom');

let arrayToMsg = (array) => {
    for (let i = 0; i < array.length; i++) {
        let msgObj = array[i];
        for (const prop in msgObj) {
            printToDom.createMsgDiv(msgObj[prop], "API");
        }
    }
};

module.exports = arrayToMsg;