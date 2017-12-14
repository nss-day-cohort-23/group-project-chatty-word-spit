"use strict";
// require('./dominteractions');

let outputField = document.getElementById("msgOutput");
let count = 0;
let userMsgs=[];

module.exports.createMsgDiv = (message) => {
    count += 1;
    // let fixMsg = message.substring(0, message.length-1);
    addToArray(message);
    let msgContainer = document.createElement("div");
    // assign individual class to div
    msgContainer.setAttribute("class", "fixMsg");
    let msgContents = 
        `<p>${message}</p>`;
    msgContainer.innerHTML = msgContents;
    // console.log(msgContainer);
    addDeleteButton(msgContainer, message);
    addEditButton(msgContainer);
};

let addDeleteButton = (div, msg) => {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.addEventListener("click", () => {
        removeFromArray(event.target);
        // console.log("After Delete",userMsgs);
        outputField.removeChild(div);
    });
    div.appendChild(deleteBtn);
    printToDom(div);   
};

// Edit Button
let msgInput = document.getElementById("msgInput");
let addEditButton = (msgContainer) => {
    let editBtn = document.createElement("button");
    editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "edit-button");
    msgContainer.appendChild(editBtn); 
    editBtn.addEventListener("click", function() {
        let editMsg = event.target.parentElement.childNodes[0].innerHTML;
        msgInput.value = editMsg;
        msgInput.focus();
        removeFromArray(event.target);
        addChangeBtn(editMsg);
    });
};

//Create Change Button
let changeBtn = document.createElement("button");
let addChangeBtn = () => {
    changeBtn.innerHTML = "Confirm?";
    changeBtn.setAttribute("class", "confirm");
    event.target.parentElement.appendChild(changeBtn);
    changeBtn.addEventListener("keypress", (event) => {
        console.log(event.target.keyCode);
    }
    );

    // changeBtn.addEventListener("click", () => {
    //     event.target.parentElement.childNodes[0].innerHTML = msgInput.value;
    //     addToArray(msgInput.value);
    //     msgInput.value = "";
    //     event.target.parentElement.removeChild(event.target);
    // });
};

//Confirm Change Event Listener

//Put add and remove to seperate functions
let addToArray = (msg)=> {
    userMsgs.push(msg);
    console.log("ADDED", userMsgs);
    };

let removeFromArray = (event) => {
    let targetMsg = event.parentElement.childNodes[0].innerHTML;
    let indexVal = userMsgs.indexOf(targetMsg);
    if (indexVal > -1) {
        userMsgs.splice(indexVal, 1);
    }
    // console.log("REMOVED", userMsgs);
};

//Print to dom
let printToDom = (fullDiv) => {
    outputField.appendChild(fullDiv);
};

// module.exports = {createMsgDiv, addToArray};