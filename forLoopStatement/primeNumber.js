const prompt = require("prompt-sync")();
const n = prompt("Enter a number to check if it is prime or not:  ");
let num = parseInt(n);
let check = 0;
for (i = 2; i < num; i++) {
    remain = num % i;
    if (remain == 0) {
        check = 1;
    }
}
if (check == 0) 
    console.log("The number " + n + " is a prime number");
else
console.log("The number " + n + " is not a prime number");