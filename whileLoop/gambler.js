const WIN = 1;
let money = 100;
let num_of_bets = 0;
let num_of_bets_won = 0;
let gamble = 0;
while ((money > 0) && (money < 200)) {
    gamble = Math.floor(Math.random() * 10) % 2;
    if (gamble == WIN) {
        money++;
        num_of_bets_won++;
    }
    else
        money--;
    num_of_bets++;
}
if (money == 200) 
    console.log("Gambler reached the goal and has money " + money);
else
    console.log("Gambler is broke and has money " + money);
console.log("Number of bets = " + num_of_bets + " Number of Bets won = " + num_of_bets_won);