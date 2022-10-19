let computerScore = 0;
let playerScore = 0;
const container = document.querySelector('.scoreContainer');

let para = document.createElement('p');
let cara = document.createElement('p');
let resultara = document.createElement('p');

container.appendChild(para);
container.appendChild(cara);
container.appendChild(resultara);

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

let rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', () => {
  playRoundRock();
});

const playRoundRock = function(roundResult) {
  let computerChoice = getComputerSelection();
  if (playerScore === 5 || computerScore === 5) {
    alert("Game Over") 
  }
  else if (computerChoice === "ROCK") {
    roundResult = "DRAW - Both chose rock"
  } else if (computerChoice === "PAPER") {
    roundResult = "Computer Wins! - Paper covers rock"
    computerScore += 1;
  } else if (computerChoice === "SCISSORS") {
    roundResult = "Player Wins! - Rock smashes scissors!"
    playerScore += 1;
  }
  console.log(roundResult);
  para.innerText = "Player Score: " + playerScore;
  cara.innerText = "Computer Score: " + computerScore;
  resultara.innerText = roundResult;
}

let paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', () => {
  playRoundPaper();
});

const playRoundPaper = function(roundResult) {
  let computerChoice = getComputerSelection();
  if (playerScore === 5 || computerScore === 5) {
    alert("Game Over") 
  }
  else if (computerChoice === "ROCK") {
    roundResult = "Player Wins! - Paper covers rock"
    playerScore += 1;
  } else if (computerChoice === "PAPER") {
    roundResult = "DRAW - Both chose paper!"
  } else if (computerChoice === "SCISSORS") {
    roundResult = "Computer Wins! - Scissors cuts paper"
    computerScore += 1;
  }
  console.log(roundResult);
  para.innerText = "Player Score: " + playerScore;
  cara.innerText = "Computer Score: " + computerScore;
  resultara.innerText = roundResult;
} 

let scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener("click", () => {
  playRoundScissors();
})

const playRoundScissors = function (roundResult) {
  let computerChoice = getComputerSelection();
  if (playerScore === 5 || computerScore === 5) {
    alert("Game Over") 
  }
  else if (computerChoice === "ROCK") {
    roundResult = "Computer Wins! - Rock smashes scissors!"
    computerScore += 1;
  } else if (computerChoice = "PAPER") {
    roundResult = "Players Wins! - Scissors cuts paper"
    playerScore += 1;
  } else if ( computerChoice = "SCISSORS") {
    roundResult = "DRAW - Both chose scissors"
  }
  console.log(roundResult);
  para.innerText = "Player Score: " + playerScore;
  cara.innerText = "Computer Score: " + computerScore;
  resultara.innerText = roundResult;
}






