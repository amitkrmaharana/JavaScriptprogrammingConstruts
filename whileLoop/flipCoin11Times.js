let head = 0;
let tail = 0;
let flip = 0;
while ((head < 11) && (tail < 11)) {
    flip = Math.floor(Math.random() * 10) % 2;
    if (flip == 0)
        head++;
    else
        tail++;
}
if (head == 11)
    console.log("Head wins the game");
else
    console.log("Tail wins the game");
console.log("Heads: " + head + " Tails: " + tail);