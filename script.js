//begin with function called getComputerChoice
//that will randomly return "rock", "paper" or "scissors"

function getComputerChoice() {
  let getComputerChoice_one = 'rock';
  let getComputerChoice_two = 'paper';
  let getComputerChoice_three = 'scissors';

  let getComputerChoiceArr = [getComputerChoice_one, getComputerChoice_two, getComputerChoice_three];
  let random = getComputerChoiceArr[Math.floor(Math.random() * getComputerChoiceArr.length)]

  return random;
}




function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper")

    console.log("You lose! Paper beats Rock!");



  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")

    console.log("You Win! Rock beats Scissors!");



  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock")

    console.log("It's a TIE, try again.");



  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")

    console.log("You win! Paper beats Rock!");



  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")

    console.log("You lose! Scissors beats Paper!");



  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper")

    console.log("It's a TIE, try again.");



  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")

    console.log("You lose! Rock beats Scissors!");



  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")

    console.log("You win! Scissors beats Paper!");



  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors")

    console.log("It's a TIE, try again.");
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//then a function that plays a single round of RPS
//the function should take 2 parameters
//playerSelection and computerSelection


//return a string that declares a winner of round
//make it case insensitive
//account for TIES be re-playing round

//return results of this function call not console.log it