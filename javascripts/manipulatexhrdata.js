"use strict";
let printToDom = require('./printtodom');

let arrayToMsg = (array) => {
    for (let i = 0; i < array.length; i++) {
        let msgObj = array[i];
        for (const prop in msgObj) {
<<<<<<< HEAD
            printToDom.createMsgDiv(msgObj[prop],"API");
=======
            printToDom.createMsgDiv(msgObj[prop], "API");
>>>>>>> master
        }
    }
};

module.exports = arrayToMsg;