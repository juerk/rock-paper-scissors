let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let random = (Math.random() * 10)
  if (random <= 3.33) {
    return "ROCK"
  } else if (random > 3.33 && random <= 6.66) {
    return "SCISSORS"
  } else {
    return "PAPER"
  }
}


function playRound(computerSelection, playerChoice) {
  if (
    computerSelection === "ROCK" && playerChoice === "SCISSORS" 
    || 
    computerSelection === "SCISSORS" && playerChoice === "PAPER"
    ||
    computerSelection === "PAPER" && playerChoice === "ROCK"
      ) {
    computerScore += 1
    return "COMPUTER WINS"
  } else if (
    playerChoice === "ROCK" && computerSelection === "SCISSORS"
    ||
    playerChoice === "SCISSORS" && computerSelection === "PAPER"
    ||
    playerChoice === "PAPER" && computerSelection === "ROCK"
  ) {
    playerScore += 1
    return "PLAYER WINS"
  } else {
    return "DRAW"
  }
}

for (let i = 0; i < 1000; i++) {
  let playerChoice = prompt("What will it be, champ?").toUpperCase();
  const computerSelection = computerPlay();
  let roundResult = playRound(computerSelection, playerChoice);
  console.log("Player: " + playerChoice)
  console.log("Computer: " + computerSelection)
  console.log(roundResult);
  console.log("Player Score : " + playerScore);
  console.log("Computer Score: " + computerScore);
  console.log("")

  if (playerScore > 4 || computerScore > 4) {
    console.log("GAME OVER")
    break;
  }
}



