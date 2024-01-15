//begin with function called getComputerChoice
//that will randomly return "rock", "paper" or "scissors"

function getComputerChoice() {
  let getComputerChoice_one = 'rock';
  let getComputerChoice_two = 'paper';
  let getComputerChoice_three = 'scissors';

  let getComputerChoiceArr = [getComputerChoice_one, getComputerChoice_two, getComputerChoice_three];
  let random = getComputerChoiceArr[Math.floor(Math.random() * getComputerChoiceArr.length)]

  return random 
}




function playRound(playerSelection, computerSelection) {
    // your code here!
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