const prompt = require("prompt-sync")();
const num = prompt("Enter a single digit number from 0 to 9 to get is alphbetical form:  ");
let number = parseInt(num);
switch (number) {
    case 0:
        console.log("ONE");
        break;
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("Invalid Input");
        break;
}