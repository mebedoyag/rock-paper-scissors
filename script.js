/*

*/

function game() {

    let userScore = 0;
    let machineScore = 0;

    for ( let i = 0; i < 5; ++i ) {
        let userChoice = prompt("Welcome to game: Rock, Paper & Scissors\n\nPlease enter your handsign: ");
        if ( userChoice == null ) {
            console.log("You did not enter any.");
            --i;
        } else {
            let machineChoice = createRandomHandSign();
            let result = playOneRound( userChoice.toLowerCase().trim(), machineChoice );
            console.log(result);
            if ( result == "You WIN!" ) {
                ++userScore;
            } else if ( result == "You LOST :)" ) {
                ++machineScore;
            } else if ( result == "No valid" ) --i;
        }
    }
    if ( userScore > machineScore ) {
        return "User is the winner"
    } else if ( userScore < machineScore ) {
        return "Machine is the winner"
    } else return "The game is tied"
}
/*
- Data definition
each element is a String.
- Signature
String String -> String
- Purpose statement
compare UserHandSign against machineHandSign, the last is randomly selected, and based on rules, show a message
that can be: You WIN !, You LOST :), There is a tie.
- Examples
given: "rock", expect: "You WIN!" if choice's machine is "scisorss"
given: "paper", expect: "You LOST :)"" if choice's machine is "scisorss"
given: "scissors", expect: "There is a tie." if choice's machine is "scisorss"
- Function template
function playOneRound( UserHandSign ) { ... UserHandSign ...}
*/
function playOneRound( userHandSign, machineHandSign ) {

    if ( userHandSign == machineHandSign ) {
        return "There is a tie.";
    } else if ( userHandSign == "paper" && machineHandSign == "rock" ) {
        return "You WIN!";
    } else if ( userHandSign == "paper" && machineHandSign == "scissors" ){
        return "You LOST :)";
    } else if ( userHandSign == "scisorss" && machineHandSign == "paper" ) {
        return "You WIN!";
    } else if ( userHandSign == "scisorss" && machineHandSign == "rock"  ) {
        return "You LOST :)";
    } else if ( userHandSign == "rock" && machineHandSign == "scisorss" ) {
        return "You WIN!";
    } else if ( userHandSign == "rock" && machineHandSign == "paper" ) {
        return "You LOST :)";
    } else return "No valid";
}
/*
- Data definition
A Number among 0, 1, 2 represents a handsign.
- Signature
nothing -> String
- Purpose statement
when it is invoke, use random and floor from built in function Math to
get a random number.
- Examples
given: 2.3, expect: 2 -> scisorss
given: 0, expect: 0 -> rock
- Function template
function createRandomHandSign() { ... }
*/
function createRandomHandSign() {
    let numberRandom = Math.floor( (Math.random() * 3) );
    switch ( numberRandom ) {
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
