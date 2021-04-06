const prompt = require("prompt-sync")();
const num = prompt("Enter serial numeric value 1)feet to inch,2)Inch to feet,3)Feet to meter,4)meter to feet: ");
let number = parseInt(num);
const input = prompt("Enter the value to be converted: ");
let value = parseInt(input);
switch (number) {
    case 1:
        console.log(value * 12);
        break;
    case 2:
        console.log(value / 12);
        break;
    case 3:
        console.log(value * 0.3048);
        break;
    case 4:
        console.log(value * 3.28084);
        break;
    default:
        console.log("Invalid Input");
        break;
}