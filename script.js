let playerScore =  0;
let computerScore = 0;
let roundResult = `Your score: ${playerScore} Computer score: ${computerScore}`;



function getComputerChoice() {
let getComputerChoiceOne = "rock";
let getComputerChoiceTwo = "paper";
let getComputerChoiceThree = "scissors";

let getComputerChoiceArr = [
getComputerChoiceOne,
getComputerChoiceTwo,
getComputerChoiceThree,
];

let random =
getComputerChoiceArr[
Math.floor(Math.random() * getComputerChoiceArr.length)
];

return random;
}

let resultLose = "You lose this round!";
let resultWin = "You win this round!";
let resultTie = "It's a TIE, try again";

function playRound() {

let playerSelection = prompt("Rock, Scissors or Paper?");
let computerSelection = getComputerChoice();

if (playerSelection === computerSelection) {
console.log(resultTie);
return playRound();
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
computerScore += 1;
console.log(resultLose);
return resultLose;
} else if (
playerSelection.toLowerCase() == "rock" &&
computerSelection == "scissors"
) {
playerScore += 1;
console.log(resultWin);
return resultWin;
} else if (
playerSelection.toLowerCase() == "rock" &&
computerSelection == "rock"
) {
console.log(resultTie);
return resultTie;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "rock"
) {
playerScore += 1;
console.log(resultWin);
return resultWin;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "scissors"
) {
computerScore += 1;
console.log(resultLose);
return resultLose;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "paper"
) {
console.log(resultTie);
return resultTie;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "rock"
) {
computerScore += 1;
console.log(resultLose);
return resultLose;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "paper"
) {
playerScore += 1;
console.log(resultWin);
return resultWin;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "scissors"
) {
console.log(resultTie);  
return resultTie;
}
}

function game() {

const gameLost = "The computer has won!"
const gameWon = "You have won!"
const gameTie = "It's a TIE!"

playRound();
console.log("Your score: " + (playerScore), " Computer Score: " + (computerScore));
playRound();
console.log("Your score: " + (playerScore), " Computer Score: " + (computerScore));
playRound();
console.log("Your score: " + (playerScore), " Computer Score: " + (computerScore));
playRound();
console.log("Your score: " + (playerScore), " Computer Score: " + (computerScore));
playRound();

if (computerScore > playerScore) {
console.log(gameLost);
} else if (computerScore < playerScore) {
console.log(gameWon);
} else if (computerScore === playerScore) {
console.log(gameTie);
}

}

game();
