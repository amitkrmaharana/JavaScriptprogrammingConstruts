let sum = 0;
for (index = 1;index <= 5;index++) {
    let value = Math.floor(Math.random() * 100) % 90 + 10;
    console.log("Value" + index + " = " + value);
    sum += value;
}
let average = sum/5;
console.log("The sum of random numbers is " + sum);
console.log("The average of the random numbers is " + average);