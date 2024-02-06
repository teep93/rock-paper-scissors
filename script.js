
let playerScore = 0;
let computerScore = 0;




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

let playerSelection = ''
let computerSelection = ''


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})


function playRound() {


if (playerSelection.toLowerCase === computerSelection) {
return playRound();
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
computerScore++;
console.log((computerScore), (playerScore));
return computerScore;
} else if (
playerSelection.toLowerCase() == "rock" &&
computerSelection == "scissors"
) {
playerScore++;
console.log((computerScore), (playerScore));
return playerScore;
} else if (
playerSelection.toLowerCase() == "rock" &&
computerSelection == "rock"
) {
console.log((computerScore), (playerScore));
return playRound;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "rock"
) {
playerScore++;
console.log((computerScore), (playerScore));
return playerScore;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "scissors"
) {
computerScore++;
console.log((computerScore), (playerScore));
return computerScore;
} else if (
playerSelection.toLowerCase() == "paper" &&
computerSelection == "paper"
) {
console.log((computerScore), (playerScore));
return playRound;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "rock"
) {
computerScore++;
console.log((computerScore), (playerScore));
return computerScore;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "paper"
) {
playerScore++;
console.log((computerScore), (playerScore));
return playerScore;
} else if (
playerSelection.toLowerCase() == "scissors" &&
computerSelection == "scissors"
) {
console.log((computerScore), (playerScore));
return playRound;
}
}



