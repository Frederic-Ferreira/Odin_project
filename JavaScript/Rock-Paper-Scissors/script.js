const btns = document.querySelectorAll("button");
const restart = document.querySelector(".play-again");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".round");
const pChoice = document.querySelector(".player-choice");
const cChoice = document.querySelector(".computer-choice");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");
const imgPlayer = document.querySelector(".img-player");
const imgComputer = document.querySelector(".img-computer");
const imgs = document.querySelectorAll(".img");

const rps = ["Rock", "Paper", "Scissors"];
let randomIndex = Math.floor(Math.random() * rps.length);
let playerSelection;
let computerSelection = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
  return rps[randomIndex];
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  pScore.textContent = "0";
  cScore.textContent = "0";
  winner.textContent = "Le premier arrivé à 5 points à gagné !";
  roundNumber.textContent = "Round 0";
  pChoice.classList.toggle("hide");
  cChoice.classList.toggle("hide");
  results.classList.remove("hide");
  imgPlayer.classList.toggle("hide");
  imgComputer.classList.toggle("hide");
  btns.forEach((btn) => btn.classList.toggle("hide"));
}

function displayImage(pChoice, cChoice) {
  if (!results.classList.contains("hide")) results.classList.add("hide");
  if (
    imgPlayer.classList.contains("hide") &&
    imgPlayer.classList.contains("hide")
  ) {
    imgPlayer.classList.remove("hide");
    imgComputer.classList.remove("hide");
  }
  imgComputer.classList.add("arrive");
  imgPlayer.classList.add("arrive");
  imgPlayer.src = `${pChoice}.png`;
  if (cChoice === "scissors") imgComputer.src = `${cChoice}2.png`;
  else imgComputer.src = `${cChoice}.png`;
}

function checkWinner() {
  pChoice.classList.add("hide");
  cChoice.classList.add("hide");
  results.classList.remove("hide");
  winner.textContent = `${
    playerScore > computerScore ? "You win" : "You lose"
  }`;
  btns.forEach((btn) => btn.classList.toggle("hide"));
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    round++;
    roundNumber.textContent = `Round ${round}`;
    pScore.textContent = `${playerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    cScore.textContent = `${computerScore}`;
    round++;
    roundNumber.textContent = `Round ${round}`;
  } else {
    round++;
    roundNumber.textContent = `Round ${round}`;
  }
}

const newComputerChoice = function () {
  randomIndex = Math.floor(Math.random() * rps.length);
  computerSelection = computerPlay().toLowerCase();
};

function game(choice) {
  playerSelection = choice;
  newComputerChoice();
  displayImage(playerSelection, computerSelection);
  setTimeout(function () {
    imgPlayer.classList.remove("arrive");
    imgComputer.classList.remove("arrive");
    imgPlayer.classList.add("battle-player");
    imgComputer.classList.add("battle-computer");
  }, 2200);
  setTimeout(() => {
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) checkWinner();
    imgPlayer.classList.remove("battle-player");
    imgComputer.classList.remove("battle-computer");
  }, 2700);
}

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const choice = e.target.getAttribute("class");
    if (playerScore < 5 && computerScore < 5) game(choice);
  })
);

restart.addEventListener("click", playAgain);

// game();
