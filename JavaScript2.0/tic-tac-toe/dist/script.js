const playerSelection = document.querySelector('.player-selection');
const main = document.querySelector('main');
const choices = document.querySelectorAll('.choices');
const gridCells = document.querySelectorAll('.grid-cell');

const gameBoard = {
  'first-row': ['', '', ''],
  'second-row': ['', '', ''],
  'third-row': ['', '', ''],
};

const winning1 =
  gameBoard['first-row'][0] === gameBoard['first-row'][1] &&
  gameBoard['first-row'][1] === gameBoard['first-row'][2] &&
  gameBoard['first-row'][0] === 'x';
const winning2 =
  gameBoard['first-row'][0] === gameBoard['first-row'][1] &&
  gameBoard['first-row'][1] === gameBoard['first-row'][2] &&
  gameBoard['first-row'][0] === 'o';
const winning3 =
  gameBoard['first-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['third-row'][2] &&
  gameBoard['first-row'][0] === 'x';
const winning4 =
  gameBoard['first-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['third-row'][2] &&
  gameBoard['first-row'][0] === 'o';
const winning5 =
  gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
  gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
  gameBoard['first-row'][0] === 'x';
const winning6 =
  gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
  gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
  gameBoard['first-row'][0] === 'o';
const winning7 =
  gameBoard['second-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['second-row'][2] &&
  gameBoard['second-row'][0] === 'x';
const winning8 =
  gameBoard['second-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['second-row'][2] &&
  gameBoard['second-row'][0] === 'o';
const winning9 =
  gameBoard['third-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][2] &&
  gameBoard['third-row'][0] === 'x';
const winning10 =
  gameBoard['third-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][2] &&
  gameBoard['third-row'][0] === 'o';
const winning11 =
  gameBoard['third-row'][0] === gameBoard['third-row'][1] &&
  gameBoard['third-row'][1] === gameBoard['third-row'][2] &&
  gameBoard['third-row'][0] === 'x';
const winning12 =
  gameBoard['third-row'][0] === gameBoard['third-row'][1] &&
  gameBoard['third-row'][1] === gameBoard['third-row'][2] &&
  gameBoard['third-row'][0] === 'o';
const winning13 =
  gameBoard['third-row'][1] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][1] &&
  gameBoard['third-row'][1] === 'x';
const winning14 =
  gameBoard['third-row'][1] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][1] &&
  gameBoard['third-row'][1] === 'o';
const winning15 =
  gameBoard['third-row'][2] === gameBoard['second-row'][2] &&
  gameBoard['second-row'][2] === gameBoard['first-row'][2] &&
  gameBoard['third-row'][2] === 'x';
const winning16 =
  gameBoard['third-row'][2] === gameBoard['second-row'][2] &&
  gameBoard['second-row'][2] === gameBoard['first-row'][2] &&
  gameBoard['third-row'][2] === 'o';

const winningCombinations = [
  winning1,
  winning2,
  winning3,
  winning4,
  winning5,
  winning6,
  winning7,
  winning8,
  winning9,
  winning10,
  winning11,
  winning12,
  winning13,
  winning14,
  winning15,
  winning16,
];

let activePlayer;

const playerProto = (choice) => {
  return {
    choice: choice,
    score: 0,
  };
};

const choosePlayer = () => {
  choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
      e.target.textContent;
    });
  });

  console.log(playerChoice);
};

const checkWinner = () => {
  let winner;

  winningCombinations.forEach((combination, i) => {
    if (combination) return (winner = i % 2 === 0 ? 'x' : 'o');
  });

  return winner;
};

const playGame = () => {
  checkWinner();
  if (winner !== undefined) console.log('The winner is ' + winner);
  if (
    gameBoard['first-row'].length === 2 &&
    gameBoard['second-row'].length === 2 &&
    gameBoard['third-row'].length === 2
  )
    console.log('Its a tie');
};

gridCells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    const i = e.target.dataset.cell;

    if (i <= 3) {
      if (gameBoard['first-row'][i - 1] === '') {
        gameBoard['first-row'][i - 1] = 'x';
        cell.textContent = 'x';
      }
    } else if (i <= 6) {
      if (gameBoard['second-row'][i - 4] === '') {
        gameBoard['second-row'][i - 4] = 'x';
        cell.textContent = 'x';
      }
    } else {
      if (gameBoard['third-row'][i - 7] === '') {
        gameBoard['third-row'][i - 7] = 'x';
        cell.textContent = 'x';
      }
    }
  });
});
