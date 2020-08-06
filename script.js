const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const resultWin = 'You WIN!';
const resultLost = 'You LOST :)';
const resultTie = 'There is a tie.';

const userWin = 'User is the winner';
const machineWin = 'Machine is the winner';
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
__ -> String
Starts the game, and play a number of plays equal to rounds. Keeps track of the score
and show at the end the winner.
*/
function game() {
        let userScore = 0;
        let machineScore = 0;
        let result;
        let winner;

        for ( let i = 0; i < 5; ++i ) {
            result = playSingleRound( playUser(), playComputer() );

            console.log( result );
            if ( result === resultWin ) ++userScore;
            if ( result === resultLost ) ++machineScore;
        }
        if ( userScore > machineScore ) {
            return userWin;
        } else if ( userScore < machineScore ) {
            return machineWin;
        } else return tie;
}
/*
__ -> HandSign
When it is invoke, use random and floor to get a whole random number, between
0 until 3, inluding both limits. Finally translate the number into a HandSign.
*/
function playComputer() {
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
function playUser() {
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

console.log( game() );
