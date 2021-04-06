const prompt = require("prompt-sync")();
const n = prompt("Enter a number n to compute the nth power of 2:  ");
let num = parseInt(n);
let power = 0;
let exponent = 0;
while ((power < 256) && (exponent <= num)){
    power = Math.pow(2,exponent);
    exponent++;
}
console.log("Exponent = " + (exponent - 1) + " Power = " + power);