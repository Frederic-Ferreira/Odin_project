const btnPaper = document.querySelector(".paper");
const imgPlayer = document.querySelector(".img-player");

btnPaper.addEventListener("click", () => (imgPlayer.src = "hand.png"));

/* Game Section */

const rps = ["Rock", "Paper", "Scissors"];
let randomIndex = Math.floor(Math.random() * rps.length);
let playerSelection;
let computerSelection = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;
// game();

function computerPlay() {
  return rps[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    playerScore++;
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    computerScore++;
  else return;
}

function newComputerChoice() {
  randomIndex = Math.floor(Math.random() * rps.length);
  computerSelection = computerPlay().toLowerCase();
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors ?").toLocaleLowerCase();
    newComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`player: ${playerScore} computer: ${computerScore}`);
  }

  playerScore === computerScore
    ? console.log("No one wins🤷‍♂️")
    : playerScore > computerScore
    ? console.log("You win ! 😃")
    : console.log("Computer wins ... 😔");
}
