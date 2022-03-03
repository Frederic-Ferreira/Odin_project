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
const spans = document.querySelectorAll("span");
const pReveals = document.querySelector(".revealing");

const rps = ["cailloux", "papier", "ciseaux"];
let randomIndex = Math.floor(Math.random() * rps.length);
let playerSelection;
let computerSelection = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;
let round = 0;
let chose = true;
let playerClass;
let computerClass;

function computerPlay() {
  return rps[randomIndex];
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerClass = "";
  computerClass = "";
  pScore.textContent = "0";
  cScore.textContent = "0";
  winner.textContent = "Le premier arrivé à 5 points à gagné !";
  roundNumber.textContent = "Round 0";
  btns.forEach((btn) => {
    if (!btn.classList.contains("begin")) btn.classList.toggle("hide");
  });
}

function displayMessage() {
  results.classList.remove("hide");
  imgPlayer.classList.toggle("hide");
  imgComputer.classList.toggle("hide");
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
  if (cChoice === "ciseaux") imgComputer.src = `${cChoice}2.png`;
  else imgComputer.src = `${cChoice}.png`;
}

function checkWinner() {
  winner.textContent = `${
    playerScore > computerScore
      ? "Tu as gagné ! 😃 🥳 🎉"
      : "L'Intelligence Artificielle t'a battu 🥺 😨 🤖"
  }`;
  btns.forEach((btn) => {
    if (!btn.classList.contains("begin")) btn.classList.toggle("hide");
  });
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "cailloux" && computerSelection === "ciseaux") ||
    (playerSelection === "papier" && computerSelection === "cailloux") ||
    (playerSelection === "ciseaux" && computerSelection === "papier")
  ) {
    playerScore++;
    playerClass = "win-player";
    computerClass = "lose-computer";
    setTimeout(function () {
      displayMessage();
      winner.textContent = `Tu gagnes, ${playerSelection} bat ${computerSelection}`;
      pScore.textContent = `${playerScore}`;
      imgPlayer.classList.remove(`${playerClass}`);
      imgComputer.classList.remove(`${computerClass}`);
    }, 700);
    if (playerScore === 5) setTimeout(() => checkWinner(), 2200);
    else chose = true;
  } else if (
    (playerSelection === "cailloux" && computerSelection === "papier") ||
    (playerSelection === "papier" && computerSelection === "ciseaux") ||
    (playerSelection === "ciseaux" && computerSelection === "cailloux")
  ) {
    computerScore++;
    computerClass = "win-computer";
    playerClass = "lose-player";
    setTimeout(function () {
      displayMessage();
      winner.textContent = `L'ordinateur gagne, ${computerSelection} bat ${playerSelection}`;
      cScore.textContent = `${computerScore}`;
      imgPlayer.classList.remove(`${playerClass}`);
      imgComputer.classList.remove(`${computerClass}`);
    }, 700);
    if (computerScore === 5) setTimeout(() => checkWinner(), 2200);
    else chose = true;
  } else {
    playerClass = "no-one-player";
    computerClass = "no-one-computer";
    setTimeout(function () {
      displayMessage();
      winner.textContent = "Ex-aequo!";
      imgPlayer.classList.remove(`${playerClass}`);
      imgComputer.classList.remove(`${computerClass}`);
      chose = true;
    }, 700);
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
    playRound(playerSelection, computerSelection);
    imgPlayer.classList.add(`${playerClass}`);
    imgComputer.classList.add(`${computerClass}`);
  }, 2200);
}

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (
      btn.classList.contains("papier") ||
      btn.classList.contains("cailloux") ||
      btn.classList.contains("ciseaux")
    ) {
      const choice = e.currentTarget.getAttribute("class");
      if (playerScore < 5 && computerScore < 5 && chose === true) {
        round++;
        roundNumber.textContent = `Round ${round}`;
        game(choice);
        chose = false;
      }
    } else if (
      btn.classList.contains("begin") ||
      btn.classList.contains("play-again")
    ) {
      for (let i = 1; i < 4; i++) {
        btns[i].classList.remove("hide");
      }
      roundNumber.classList.remove("hide");
      btns[0].classList.add("hide");
      pReveals.classList.add("hide");
      winner.classList.remove("hide");
    }
  })
);

restart.addEventListener("click", playAgain);

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = spans[char];
  span.classList.add("appears");
  char++;
  //stops the function from running once the end of the string has been reached
  if (char === spans.length) {
    complete();
    return;
  }
}
function complete() {
  btns[0].classList.remove("hide");
  clearInterval(timer);
  timer = null;
}
