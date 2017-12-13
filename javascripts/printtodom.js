"use strict";
// require('./dominteractions');

let outputField = document.getElementById("msgOutput");
let count = 0;
let userMsgs=[];

module.exports.createMsgDiv = (message) => {
    count += 1;
    if (count > 5) {
        userMsgs.push(message.substring(0, message.length-1));
    }
    let msgContainer = document.createElement("div");
    // assign individual class to div
    msgContainer.setAttribute("class", `msg${count}`);
    let msgContents = 
        `<p>${message}</p>`;
    msgContainer.innerHTML = msgContents;
    console.log(msgContainer);
    addDeleteButton(msgContainer);
};


let addDeleteButton = (div) => {
    console.log("Ready to add a delete button to", div);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete Message";
    deleteBtn.addEventListener("click", () => {
        console.log("delete listening");
    });
    div.appendChild(deleteBtn);
    printToDom(div);
};

let printToDom = (fullDiv) => {
    outputField.appendChild(fullDiv);
};

// module.exports = createMsgDiv;