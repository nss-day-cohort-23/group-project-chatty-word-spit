"use strict";


let manipulateData = require('./manipulatexhrdata');

let msgRequest = new XMLHttpRequest();

const parseMsgData = () => {
    console.log(event.target.responseText);
    const defaultMsgArray = JSON.parse(event.target.responseText);
    manipulateData(defaultMsgArray);
    
};

msgRequest.addEventListener("load", parseMsgData);
msgRequest.open("GET", "https://word-spit.firebaseio.com/messages/messages.json");
msgRequest.send();


//RAP BATTLE TEST CODE
// const parseMsgData = () => {
//     const defaultMsgArray = JSON.parse(event.target.responseText).messages;
//     console.log(defaultMsgArray[0].wingstop);
    
// };

// msgRequest.addEventListener("load", parseMsgData);
// msgRequest.open("GET", "/JSON/rapbattle.json");
// msgRequest.send();


