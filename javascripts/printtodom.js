"use strict";
// require('./dominteractions');

let outputField = document.getElementById("msgOutput");
let count = 0;
let userMsgs=[];

module.exports.createMsgDiv = (message) => {
    count += 1;
    let fixMsg = message.substring(0, message.length-1);
    if (count > 5) {
        userMsgs.push(fixMsg);
    }
    let msgContainer = document.createElement("div");
    // assign individual class to div
    msgContainer.setAttribute("class", `msg${count}`);
    let msgContents = 
        `<p>${fixMsg}</p>`;
    msgContainer.innerHTML = msgContents;
    console.log(msgContainer);
    addDeleteButton(msgContainer, fixMsg);
};


let addDeleteButton = (div, msg) => {
    console.log(userMsgs);
    console.log("Ready to add a delete button to", div);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete Message";
    // console.log(index);
    let indexVal = userMsgs.indexOf(msg);
    deleteBtn.addEventListener("click", (msg) => {
        console.log("current index", indexVal);
        if (indexVal > -1) {
            userMsgs.splice(indexVal, 1);
        }
        console.log("after delete",userMsgs);
        outputField.removeChild(div);


    });
    div.appendChild(deleteBtn);
    printToDom(div);

};

let printToDom = (fullDiv) => {
    outputField.appendChild(fullDiv);
};

// module.exports = createMsgDiv;