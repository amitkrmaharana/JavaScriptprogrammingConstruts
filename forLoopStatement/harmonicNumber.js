const prompt = require("prompt-sync")();
const num = prompt("Enter the value of n to print the nth harmonic number: ");
let n = parseInt(num);
let harSum = 0;
for (i = 1; i <= n; i++) {
    harSum += (1 / i);
}
console.log("The hasrmonic sum of nth number is " + harSum);