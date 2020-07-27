/*
1rst
- Data definition
a String represents each element.
2nd
- Signature
String String -> String
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

function playRockPaperScissors( userHandSign ) {
    let machineHandSign = createRandomHandSign();

    if ( userHandSign == machineHandSign ) {
        console.log("It is a tie.");
    } else if ( userHandSign == "paper" && machineHandSign == "rock" ) {
        console.log("You WIN!");
    } else if ( userHandSign == "paper" && machineHandSign == "scissors" ){
        console.log("You LOST :)");
    } else if ( userHandSign == "scisorss" && machineHandSign == "paper" ) {
        console.log("You WIN!");
    } else if ( userHandSign == "scisorss" && machineHandSign == "rock"  ) {
        console.log("You LOST :)");
    } else if ( userHandSign == "rock" && machineHandSign == "scisorss" ) {
        console.log("You WIN!");
    } else if ( userHandSign == "rock" && machineHandSign == "paper" ) {
        console.log("You LOST :)");
    } else console.log("Please enter a hand sign valid.");

    if ( confirm("Would you like to game again?") ) main();
    // else return;
}
function main() {
    let userChoice = prompt("Welcome to game: Rock, Paper & Scissors\n\nPlease enter your handsign: ");
    if ( userChoice == null ) {
        console.log("Please enter a hand sign valid.");
    } else playRockPaperScissors( userChoice.toLowerCase().trim() );
}

function createRandomHandSign() {
    let machineChoice = Math.floor((Math.random() * 3));
    switch (machineChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
    }
}
