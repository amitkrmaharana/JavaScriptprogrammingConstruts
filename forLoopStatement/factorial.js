const prompt = require("prompt-sync")();
const n = prompt("Enter a number to compute its factorial:  ");
let num = parseInt(n);
let factorial = 1;
for (i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("The factorial of number " + n + " is " + factorial);