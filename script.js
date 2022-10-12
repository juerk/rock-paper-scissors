let computerSelection = (Math.random() * 10)
let playerSelection = prompt("What will it be, champ?").toUpperCase()
let computerOutcome = getComputerSelection(computerSelection)
let playerOutcome = getPlayerSelection(playerSelection)

function getComputerSelection(computerSelection){
  if (computerSelection <= 3.33) {
    return "ROCK"
  } else if (computerSelection > 3.33 && computerSelection <= 6.66) {
    return "SCISSORS"
  } else {
    return "PAPER"
  }
}

function getPlayerSelection(playerSelection) {
  if (playerSelection === "ROCK") {
    return "ROCK"
  } else if (playerSelection === "SCISSORS")  {
    return "SCISSORS"
  } else if (playerSelection === "PAPER") {
    return "PAPER"
  } else {
    return alert("Try again, this time type either 'ROCK' 'Paper' or 'Scissors'.")
  }
}

function getWinner(computerOutcome, playerOutcome) {
  if (
    computerOutcome === "ROCK" && playerOutcome === "SCISSORS" 
    || 
    computerOutcome === "SCISSORS" && playerOutcome === "PAPER"
    ||
    computerOutcome === "PAPER" && playerOutcome === "ROCK"
      ) {
    return "COMPUTER WINS"
  } else if (
    playerOutcome === "ROCK" && computerOutcome === "SCISSORS"
    ||
    playerOutcome === "SCISSORS" && computerOutcome === "PAPER"
    ||
    playerOutcome === "PAPER" && computerOutcome === "ROCK"
  ) {
    return "PLAYER WINS"
  } else {
    return "DRAW"
  }
}

let roundWinner = getWinner(computerOutcome, playerOutcome)







console.log(playerOutcome)
console.log(computerOutcome)
console.log(roundWinner)

