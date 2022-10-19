let computerScore = 0;
let playerScore = 0;

let rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', () => {
  playRoundRock();
});

let paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', () => {
  playRoundPaper();
});

let scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener("click", () => {
  playRoundScissors();
})


const getComputerSelection = function(computerChoice) {
  let random = Math.random();
  if (random < .33) {
    computerChoice = "ROCK"
  } else if (random > .67) {
    computerChoice = "PAPER"
  } else {
    computerChoice = "SCISSORS"
  }
  return computerChoice;
}

const playRoundRock = function(roundResult) {
  let computerChoice = getComputerSelection();
  if (computerChoice === "ROCK") {
    roundResult = "DRAW"
  } else if (computerChoice === "PAPER") {
    roundResult = "Computer Wins!"
    computerScore += 1;
  } else if (computerChoice === "SCISSORS") {
    roundResult = "Player Wins!"
    playerScore += 1;
  }
  console.log(computerChoice);
  console.log(roundResult);
  console.log(playerScore);
  console.log(computerScore);
}

const playRoundPaper = function(roundResult) {
  let computerChoice = getComputerSelection();
  if (computerChoice === "ROCK") {
    roundResult = "Player Wins!"
    playerScore += 1;
  } else if (computerChoice === "PAPER") {
    roundResult = "DRAW"
  } else if (computerChoice === "SCISSORS") {
    roundResult = "Computer Wins"
    computerScore += 1;
  }
  console.log(computerChoice);
  console.log(roundResult);
  console.log(playerScore);
  console.log(computerScore);
} 

const playRoundScissors = function (roundResult) {
  let computerChoice = getComputerSelection();
  if (computerChoice === "ROCK") {
    roundResult = "Computer Wins!"
    computerScore += 1;
  } else if (computerChoice = "PAPER") {
    roundResult = "Players Wins!"
    playerScore += 1;
  } else if ( computerChoice = "SCISSORS") {
    roundResult = "DRAW"
  }
  console.log(computerChoice);
  console.log(roundResult);
  console.log(playerScore);
  console.log(computerScore);
}
















// computer Selection DONE
// player Selection
// connect buttons to player Selection
// function to choose winner
// keep player and computer score
// first to 5 wins
// output results to web screen