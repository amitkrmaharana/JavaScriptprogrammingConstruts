const prompt = require("prompt-sync")();
const num = prompt("Enter a number to print the table of 2 till the number:  ");
let n = parseInt(num);
for (i = 1;i <= n;i++){
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
}