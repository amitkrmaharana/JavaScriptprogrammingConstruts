const prompt = require("prompt-sync")();
console.log("Think of a number between 1 to 100");
let guess = 0;
let a = 0;
let n = 100;
while (guess < 1) {
    const x = prompt("Enter 1 if your number is " + n + " else enter 0: ");
    guess = parseInt(x);
    if (guess == 0) {
        let b = n;
        n = (a + n) / 2;
        const y = prompt("Enter 1 if your number is greater than " + n +  " else enter 0: ");
        let guess1 = parseInt(y);
        if (guess1 == 1) {
            a=n;
            n=b;
        }
    }
}
console.log("Your number is " + n);