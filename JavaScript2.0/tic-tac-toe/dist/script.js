const playerSelection = document.querySelector('.player-selection');
const main = document.querySelector('main');
const choices = document.querySelectorAll('.choices');
const gridCells = document.querySelectorAll('.grid-cell');

const gameBoard = {
  'first-row': ['', '', ''],
  'second-row': ['', '', ''],
  'third-row': ['', '', ''],
};

let activePlayer, playerOne, playerTwo, winner;
let tie = false;

const playerProto = (choice) => {
  return {
    choice: choice,
    score: 0,
  };
};

const choosePlayer = (choice) => {
  playerOne = playerProto(choice);
  playerTwo = playerProto(choice === 'X' ? 'O' : 'X');
  activePlayer = playerOne;
  playerSelection.classList.add('hidden');
  main.classList.remove('hidden');
  playGame();
};

const checkCombinations = () => {
  const winningCombinations = [
    gameBoard['first-row'][0] === gameBoard['first-row'][1] &&
      gameBoard['first-row'][1] === gameBoard['first-row'][2] &&
      gameBoard['first-row'][0] === 'X',
    gameBoard['first-row'][0] === gameBoard['first-row'][1] &&
      gameBoard['first-row'][1] === gameBoard['first-row'][2] &&
      gameBoard['first-row'][0] === 'O',
    gameBoard['first-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['third-row'][2] &&
      gameBoard['first-row'][0] === 'X',
    gameBoard['first-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['third-row'][2] &&
      gameBoard['first-row'][0] === 'O',
    gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
      gameBoard['second-row'][0] === gameBoard['third-row'][0] &&
      gameBoard['first-row'][0] === 'X',
    gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
      gameBoard['second-row'][0] === gameBoard['third-row'][0] &&
      gameBoard['first-row'][0] === 'O',
    gameBoard['second-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['second-row'][2] &&
      gameBoard['second-row'][0] === 'X',
    gameBoard['second-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['second-row'][2] &&
      gameBoard['second-row'][0] === 'O',
    gameBoard['third-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['first-row'][2] &&
      gameBoard['third-row'][0] === 'X',
    gameBoard['third-row'][0] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['first-row'][2] &&
      gameBoard['third-row'][0] === 'O',
    gameBoard['third-row'][0] === gameBoard['third-row'][1] &&
      gameBoard['third-row'][1] === gameBoard['third-row'][2] &&
      gameBoard['third-row'][0] === 'X',
    gameBoard['third-row'][0] === gameBoard['third-row'][1] &&
      gameBoard['third-row'][1] === gameBoard['third-row'][2] &&
      gameBoard['third-row'][0] === 'O',
    gameBoard['third-row'][1] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['first-row'][1] &&
      gameBoard['third-row'][1] === 'X',
    gameBoard['third-row'][1] === gameBoard['second-row'][1] &&
      gameBoard['second-row'][1] === gameBoard['first-row'][1] &&
      gameBoard['third-row'][1] === 'O',
    gameBoard['third-row'][2] === gameBoard['second-row'][2] &&
      gameBoard['second-row'][2] === gameBoard['first-row'][2] &&
      gameBoard['third-row'][2] === 'X',
    gameBoard['third-row'][2] === gameBoard['second-row'][2] &&
      gameBoard['second-row'][2] === gameBoard['first-row'][2] &&
      gameBoard['third-row'][2] === 'O',
  ];

  winningCombinations.forEach((combination, i) => {
    if (combination) winner = i % 2 === 0 ? 'x' : 'o';
  });

  return winner;
};

const checkTie = () => {
  if (
    gameBoard['first-row'][0] !== '' &&
    gameBoard['first-row'][1] !== '' &&
    gameBoard['first-row'][2] !== '' &&
    gameBoard['second-row'][0] !== '' &&
    gameBoard['second-row'][1] !== '' &&
    gameBoard['second-row'][2] !== '' &&
    gameBoard['third-row'][0] !== '' &&
    gameBoard['third-row'][1] !== '' &&
    gameBoard['third-row'][2] !== ''
  )
    tie = true;
};

const playGame = () => {
  checkCombinations();
  if (winner !== undefined) console.log('The winner is ' + winner);
  checkTie();
  if (winner === undefined && tie === true) console.log('Its a tie');
};

gridCells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    const i = e.target.dataset.cell;
    const fill = activePlayer.choice;

    if (i <= 3) {
      if (gameBoard['first-row'][i - 1] === '') {
        gameBoard['first-row'][i - 1] = fill;
        cell.textContent = fill;
      }
    } else if (i <= 6) {
      if (gameBoard['second-row'][i - 4] === '') {
        gameBoard['second-row'][i - 4] = fill;
        cell.textContent = fill;
      }
    } else {
      if (gameBoard['third-row'][i - 7] === '') {
        gameBoard['third-row'][i - 7] = fill;
        cell.textContent = fill;
      }
    }
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    playGame();
  });
});

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    choosePlayer(e.target.textContent);
  });
});
