// JavaScript Promises Explanation:
// Promises are objects representing the eventual completion or failure of an asynchronous operation.
// They have three states: pending, fulfilled, or rejected.
// Promise.resolve(value) returns a Promise that is resolved with the given value.
// Here, we simulate a morning routine using promises.

const { resolve } = require("path");

function wakeup() {
    return Promise.resolve("take brush");
}

function takeShower() {
    return Promise.resolve("take shower");
}

function haveBreakfast() {
    return Promise.resolve("have breakfast");
}

function goToCollege() {
    return Promise.resolve("go to college");
}

wakeup()
    .then(result => {
        console.log(result); // Output: take brush
        return takeShower();
    })
    .then(result => {
        console.log(result); // Output: take shower
        return haveBreakfast();
    })
    .then(result => {
        console.log(result); // Output: have breakfast
        return goToCollege();
    })
    .then(result => {
        console.log(result); // Output: go to college
        console.log("Morning routine completed!");
    })
    .catch(error => {
        console.error("Error in routine:", error);
    });

// Alternative using async/await for cleaner syntax
async function morningRoutine() {
    try {
        const step1 = await wakeup();
        console.log(step1);

        const step2 = await takeShower();
        console.log(step2);

        const step3 = await haveBreakfast();
        console.log(step3);

        const step4 = await goToCollege();
        console.log(step4);

        console.log("Morning routine completed with async/await!");
    } catch (error) {
        console.error("Error:", error);
    }
}

function takeShower(){
    return new Promise.resolve("take shower")
}
function haveBreakfast(){
    return new Promise.resolve("have breakfast")
}
function goToCollege(){
    return new Promise.resolve("go to college")
}
