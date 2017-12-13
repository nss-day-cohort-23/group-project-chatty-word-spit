"use strict";
let printToDom = require('./printtodom');

let arrayToMsg = (array) => {
    array.forEach((str) => {
        printToDom.createMsgDiv(str);
    });
};

// arrayToMsg(dummyArray);

module.exports = arrayToMsg;