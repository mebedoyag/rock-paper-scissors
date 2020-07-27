/*
1rst
- Data definition
a String represents each element.
2nd
- Signature
String -> String
- Purpose statement
compare UserHandSign against machine's choice, and acording to rules, show a message
that can be: You WIN !, You LOST :), It is a tie.
3rd
- Examples
given: "rock", expect: "You WIN" ! if choice's machine is "scisorss"
given: "paper", expect: "You LOST" :) if choice's machine is "scisorss"
given: "scissors", expect: "It is a tie." if choice's machine is "scisorss"
4th
function gameRockPaperScissors( UserHandSign ) { ... UserHandSign ...}
*/

function gameRockPaperScissors(UserHandSign) {
    let machineChoice = "rock";

    if ( UserHandSign == machineChoice ) console.log("It is a tie.");
    if ( UserHandSign == "paper" && machineChoice == "rock")  console.log("You WIN!");
    if ( UserHandSign == "scissors" && machineChoice == "rock")  console.log("You LOST :)");
}

function main() {
    let UserChoice = prompt("Welcome to game: Rock, Paper & Scissors\n\nPlease enter your handsign: ");
    gameRockPaperScissors(UserChoice);
}
