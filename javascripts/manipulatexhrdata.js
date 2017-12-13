"use strict";
require('./printtodom');

let arrayToMsg = (array) => {
    array.forEach((str) => {
        createMsgDiv(str);
    });
};

module.exports = arrayToMsg;