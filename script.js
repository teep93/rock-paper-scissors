let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

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

let playerSelection = "";
let computerSelection = "";

function playRound() {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    console.log(computerScore, playerScore);
    roundWinner = "computer";
    console.log(roundWinner);
    
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    roundWinner = "player";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    roundWinner = "tie";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    roundWinner = "player";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    roundWinner = "computer";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    roundWinner = "tie";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    roundWinner = "computer";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    roundWinner = "player";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    roundWinner = "tie";
    console.log(computerScore, playerScore);
    console.log(roundWinner);
    
  }
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  displayScore(roundWinner);
  displayChoices(playerSelection, computerSelection);
  showGameWinner(computerScore, playerScore);
  
  
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  displayScore(roundWinner);
  displayChoices(playerSelection, computerSelection);
  showGameWinner(computerScore, playerScore);
  }
);

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  displayScore(roundWinner);
  displayChoices(playerSelection, computerSelection);
  showGameWinner(computerScore, playerScore);
});

const playAgainBtn = document.querySelector("#retryBtn");
playAgainBtn.addEventListener("click", () => {
  playerScore = 0;
  let displayPlayerScore = document.querySelector('div.yourScore');
  displayPlayerScore.innerText = "Your score: " + playerScore;
  computerScore = 0;
  let displayComputerScore = document.querySelector('div.compScore');
  displayComputerScore.innerText = "Computer score:" + computerScore;
  let displayPlayerChoice = document.querySelector('div.playerChoice');
  displayPlayerChoice.innerText = "";
  let displayComputerChoice = document.querySelector('div.computerChoice');
  displayComputerChoice.innerText = "";
  
  
});





function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}


function displayScore() {
  if (roundWinner == "player") {
    let displayPlayerScore = document.querySelector('div.yourScore');
    displayPlayerScore.innerText = "Your score: " + playerScore;
  } else if (roundWinner == "computer") {
    let displayComputerScore = document.querySelector('div.compScore');
    displayComputerScore.innerText = "Computer score:" + computerScore;
  }
}

function displayChoices(playerSelection, computerSelection) {
  let displayPlayerChoice = document.querySelector('div.playerChoice');
  switch (playerSelection) {
    case 'rock':
      displayPlayerChoice.innerText = "You chose Rock"
      break
    case 'paper':
      displayPlayerChoice.innerText = "You chose Paper"
      break
    case 'scissors':
      displayPlayerChoice.innerText = "You chose Scissors"
      break
  }
  let displayComputerChoice = document.querySelector('div.computerChoice');
  switch (computerSelection) {
    case 'rock':
      displayComputerChoice.innerText = "Computer chose Rock"
      break
    case 'paper':
      displayComputerChoice.innerText = "Computer chose Paper"
      break
    case 'scissors':
      displayComputerChoice.innerText = "Computer chose Scissors"
      break
  }

}

function showGameWinner() {
  if (computerScore >= 5 && computerScore > playerScore) {
    alert("GAME OVER THE COMPUTER HAS WON");
  } else if (playerScore >= 5 && playerScore > computerScore) {
    alert("GAME OVER YOU HAVE WON")
  } 
}



