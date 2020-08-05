const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const resultWin = 'You WIN!';
const resultLost = 'You LOST :)';
const resultTie = 'There is a tie.';

const userWin = 'User is the winner';
const machineWinner = 'Machine is the winner';
const tie = 'The match is tie';

const rounds = 5;

/*
A HandSign is one of those:
- rock
- paper
- scissors
Interpretation: each HandSign corresponds to the element
*/

/*
__ -> HandSign
When it is invoke, use random and floor to get a whole random number, between
0 until 3, inluding both limits. Finally translate the number into a HandSign.
*/
function computerPlay() {
    let numberRandom = Math.floor( Math.random() * 3 );

    if ( numberRandom == 0 ) return rock;
    if ( numberRandom == 1 ) return paper;
    if ( numberRandom == 2 ) return scissors;
}
/*
__ -> HandSign
Ask to user enter a HandSign with prompt, and use toLowerCase to make function
case insensitive.
*/
function userPlay() {
    let userEntry =  prompt("Please select one of this:\nRock\nPaper\nScissors");

    return userEntry.toLowerCase();
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
/*
String -> String
Keeps score and reports a winner or loser at the end of 5 rounds.
given: resultWin, resultWin, resultWin, resultLost, resultLost; expect: userWin
given: resultWin, resultLost, resultWin, resultLost, resultLost; expect: machineWin
function score( result ) {...}
*/
function score( str ) {
    let userScore = 0;
    let machineScore = 0;
    let i = 0;

    if ( str === resultWin ) ++userScore;
    if ( str === resultLost ) ++machineScore;
    ++i;

    if ( i == rounds - 1 ) {
        if ( userScore > machineScore ) {
            return userWin;
        } else if ( userScore < machineScore ) {
            return machineWin;
        } else return tie;
    }
}

function game() {

    for ( let i = 0; i < rounds; ++i ) {
        let result = playSingleRound( userPlay(), computerPlay() );

        console.log( result );
        score( result );
    }



    // let userScore = 0;
    // let machineScore = 0;

    // for ( let i = 0; i < 5; ++i ) {
    //     let userChoice = prompt("Welcome to game: Rock, Paper & Scissors\n\nPlease enter your handsign: ");
    //     if ( userChoice == null ) {
    //         console.log("You did not enter any.");
    //         --i;
    //     } else {
    //         let machineChoice = computerPlay( 3 );
    //         let result = playSingleRound( userChoice.toLowerCase().trim(), machineChoice );
    //         console.log(result);
    //         if ( result == resultWin ) {
    //             ++userScore;
    //         } else if ( result == resultLost ) {
    //             ++machineScore;
    //         } else if ( result == "No valid" ) --i;
    //     }
    // }
    // if ( userScore > machineScore ) {
    //     return "User is the winner"
    // } else if ( userScore < machineScore ) {
    //     return "Machine is the winner"
    // } else return "The game is tied"
}

game();
