const prompt = require("prompt-sync")();
const num = prompt("Enter a corresponding number from 1 to 7  to print the week day: ");
if (num == 1)
    console.log("SUNDAY");
else if (num == 2)
    console.log("MONDAY");
else if (num == 3)
    console.log("TUESDAY");
else if (num == 4)
    console.log("WEDNESDAY");
else if (num == 5)
    console.log("THURSDAY");
else if (num == 6)
    console.log("FRIDAY");
else if (num == 7)
    console.log("SATURDAY");
else
    console.log("Invalid Input");