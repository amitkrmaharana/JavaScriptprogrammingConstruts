const prompt = require("prompt-sync")();
const input = prompt("Enter a number to check whether it is a leap year or not: ");
let year = parseInt(input);
let a  = year%4;
let b = year%100;
let c = year%400;
if ((a == 0) && ((b != 0) || (c == 0))) {
    console.log("Year " + year + " is a Leap Year");
}
else {
    console.log("Year " + year + " is not a Leap Year");
}