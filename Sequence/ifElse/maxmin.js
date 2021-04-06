for (index = 1; index <= 5; index++) {
    num = Math.floor(Math.random() * 1000) % 900 + 100;
    console.log("num" + index + " = " + num);
    if (index == 1) {
        min = num;
        max = num;
    }
    else {
        if ( min < num) {
            if ( num > max) {
                max = num;
            }
        }
        else {
            min = num;
        }
    }
}
console.log("The Maximum number is " + max);
console.log("The minimum number is " + min);