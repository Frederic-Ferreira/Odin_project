const btns = document.querySelectorAll("button");
const restart = document.querySelector(".play-again");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const pChoice = document.querySelector(".player-choice");
const cChoice = document.querySelector(".computer-choice");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");
const imgPlayer = document.querySelector(".img-player");
const imgComputer = document.querySelector(".img-computer");

const rps = ["Rock", "Paper", "Scissors"];
let randomIndex = Math.floor(Math.random() * rps.length);
let playerSelection;
let computerSelection = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return rps[randomIndex];
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = "0";
  cScore.textContent = "0";
  pChoice.classList.toggle("hide");
  cChoice.classList.toggle("hide");
  results.classList.toggle("hide");
  imgPlayer.classList.toggle("hide");
  imgComputer.classList.toggle("hide");
  btns.forEach((btn) => btn.classList.toggle("hide"));
}

function displayImage(pChoice, cChoice) {
  imgPlayer.classList.remove("hide");
  imgComputer.classList.remove("hide");
  imgPlayer.src = `${pChoice}.png`;
  imgComputer.src = `${cChoice}.png`;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    pChoice.classList.add("hide");
    cChoice.classList.add("hide");
    results.classList.remove("hide");
    winner.textContent = `${
      playerScore > computerScore ? "You win" : "You lose"
    }`;
    btns.forEach((btn) => btn.classList.toggle("hide"));
  } else return;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    pScore.textContent = `${playerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    cScore.textContent = `${computerScore}`;
  } else return;
}

const newComputerChoice = function () {
  randomIndex = Math.floor(Math.random() * rps.length);
  computerSelection = computerPlay().toLowerCase();
};

function game(choice) {
  playerSelection = choice;
  newComputerChoice();
  playRound(playerSelection, computerSelection);
  displayImage(playerSelection, computerSelection);
}

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const choice = e.target.getAttribute("class");
    if (playerScore < 5 && computerScore < 5) {
      game(choice);
      checkWinner();
    }
  })
);

restart.addEventListener("click", playAgain);

// game();
