const resultWin = 'You WIN!';
const resultLost = 'You LOST :)';
const resultTie = 'There is a tie.';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

/*
A HandSign is one of those:
- rock
- paper
- scissors
Interpretation: each HandSign corresponds to the element
*/

/*
Number -> HandSign
When it is invoke, use random and floor to get a whole random number, between
0 until Number-1.
given: 3, expect: scisorss
given: 3, expect: rock
given: 3, expect: paper
function computerPlay( options ) { ... }
*/
function computerPlay( options ) {
    let numberRandom = Math.floor( Math.random() * options );
    switch ( numberRandom ) {
        case 0:
        return rock;
        break;
        case 1:
        return paper;
        break;
        case 2:
        return scissors;
        break;
        // default:
    }
}
/*
HandSign HandSign -> String
Compare playerSelection against computerSelection, the latter is randomly selected, and based on rules, show a message
that can be:
    - resultWin
    - resultLost
    - resultTie
given: rock, expect: resultWin if choice's machine is scissors
given: paper, expect: resultLost if choice's machine is scissors
given: scissors, expect: resultTie if choice's machine is scissors
function playSingleRound( playerSelection, computerSelection ) { ... playerSelection, computerSelection ...}
*/
function playSingleRound( playerSelection, computerSelection ) {

    if ( playerSelection == computerSelection ) {
        return resultTie;
    } else if ( playerSelection == paper && computerSelection == rock ) {
        return resultWin;
    } else if ( playerSelection == paper && computerSelection == scissors ){
        return resultLost;
    } else if ( playerSelection == scissors && computerSelection == paper ) {
        return resultWin;
    } else if ( playerSelection == scissors && computerSelection == rock  ) {
        return resultLost;
    } else if ( playerSelection == rock && computerSelection == scissors ) {
        return resultWin;
    } else if ( playerSelection == rock && computerSelection == paper ) {
        return resultLost;
    } else return "No valid";
}

function game() {

    let userScore = 0;
    let machineScore = 0;

    for ( let i = 0; i < 5; ++i ) {
        let userChoice = prompt("Welcome to game: Rock, Paper & Scissors\n\nPlease enter your handsign: ");
        if ( userChoice == null ) {
            console.log("You did not enter any.");
            --i;
        } else {
            let machineChoice = computerPlay( 3 );
            let result = playSingleRound( userChoice.toLowerCase().trim(), machineChoice );
            console.log(result);
            if ( result == resultWin ) {
                ++userScore;
            } else if ( result == resultLost ) {
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
