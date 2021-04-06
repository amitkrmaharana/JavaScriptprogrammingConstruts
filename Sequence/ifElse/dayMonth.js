const prompt = require("prompt-sync")();
const month = prompt("Enter a value from 1 to 12 which represents corresponding month: ");
const date = prompt("Enter a value from 1 to 31 as date: ");
if (((month == 3) && (date >= 20) && (date <= 31)) || ((month == 4) && (date >= 1) && (date <= 30)) || 
((month == 5) && (date >= 1) && (date <= 31)) || ((month == 6) && (date >= 1) && (date <= 20))) {
    console.log("True");
}
else {
    console.log("False");
}