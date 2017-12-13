"use strict";
let printToDom = require('./printtodom');
console.log(printToDom);

// let dummyArray = ["this", "is", "just for testing", "my function"];

let arrayToMsg = (array) => {
    array.forEach((str) => {
        printToDom(str);
    });
};

// arrayToMsg(dummyArray);

module.exports = arrayToMsg;