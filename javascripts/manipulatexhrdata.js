"use strict";
let printToDom = require('./printtodom');


let arrayToMsg = (array) => {
    array.forEach((obj) => {
        let strng = obj.wingstop;
            printToDom.createMsgDiv(strng);
        strng = obj.wendys;
            printToDom.createMsgDiv(strng);
    });
};


module.exports = arrayToMsg;