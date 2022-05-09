const playerSelection = document.querySelector('.player-selection');
const adversarySelection = document.querySelectorAll('.selection');
const chooseWeapon = document.querySelector('.player-one');
const box = document.querySelector('.box');
const main = document.querySelector('main');
const choices = document.querySelectorAll('.choices');
const gridCells = document.querySelectorAll('.grid-cell');
const firstPlayer = document.querySelector('.first-player');
const secondPlayer = document.querySelector('.second-player');
const firstPlayerChoice = document.querySelector(
  '.player-one--choice'
);
const secondPlayerChoice = document.querySelector(
  '.player-two--choice'
);
const firstPlayerScore = document.querySelector('.player-one--score');
const secondPlayerScore = document.querySelector(
  '.player-two--score'
);

const gameBoard = {
  'first-row': ['', '', ''],
  'second-row': ['', '', ''],
  'third-row': ['', '', ''],
};

let activePlayer, playerOne, playerTwo, winner;
let tie = false;

const playerProto = (choice, player) => {
  return {
    choice: choice,
    player: player,
    score: 0,
  };
};

const choosePlayer = (choice) => {
  playerOne = playerProto(choice, 'Player One');
  playerTwo.choice = choice === 'X' ? 'O' : 'X';
  activePlayer = playerOne;
  playerSelection.classList.add('hidden');
  main.classList.remove('hidden');
  playGame();
};

const setDisplay = () => {
  const firstPlayerName = firstPlayer.firstElementChild.nextSibling;
  const secondPlayerName = secondPlayer.firstElementChild.nextSibling;

  firstPlayerName.textContent = 'The King 👑';

  firstPlayerChoice.textContent =
    playerOne.choice === 'O' ? 'O' : 'X';

  firstPlayerScore.textContent = playerOne.score;

  secondPlayerName.textContent =
    playerTwo.player === 'Computer'
      ? 'The Machine 🦾'
      : 'Your best bud 💪';

  secondPlayerChoice.textContent =
    playerTwo.choice === 'O' ? 'O' : 'X';

  secondPlayerScore.textContent = playerTwo.score;
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

const autoPlay = () => {
  const keys = Object.keys(gameBoard);
  const fill = playerTwo.choice;

  let random = Math.floor(Math.random() * 3);
  let index = Math.floor(Math.random() * 3);
  let cell;

  const findCell = () => {
    const [goodCell] = [...gridCells].filter((cell) => {
      if (keys[random] === 'first-row') {
        return cell.dataset.cell === String(index + 1);
      } else if (keys[random] === 'second-row') {
        return cell.dataset.cell === String(index + 4);
      } else return cell.dataset.cell === String(index + 7);
    });

    return (cell = goodCell);
  };

  const tryFill = () => {
    console.log('tryFill called');
    for (i = 0; i < 9; i++) {
      findCell();
      if (gameBoard[keys[random]][index] === '') {
        gameBoard[keys[random]][index] = fill;
        cell.firstElementChild.textContent = fill;
        cell.firstElementChild.classList.add('p-cell');
        break;
      } else {
        random = Math.floor(Math.random() * 3);
        index = Math.floor(Math.random() * 3);
      }
    }
  };

  if (gameBoard[keys[random]][index] === '') {
    console.log('first attempt to fill');
    console.log(random, index);
    findCell();
    gameBoard[keys[random]][index] = fill;
    cell.firstElementChild.textContent = fill;
    cell.firstElementChild.classList.add('p-cell');
  } else {
    console.log('second attempt to fill');
    tryFill();
  }

  activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
};

const playGame = () => {
  if (playerTwo.player === 'Computer' && activePlayer === playerTwo)
    setTimeout(autoPlay, 2000);
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
        cell.firstElementChild.textContent = fill;
        cell.firstElementChild.classList.add('p-cell');
      }
    } else if (i <= 6) {
      if (gameBoard['second-row'][i - 4] === '') {
        gameBoard['second-row'][i - 4] = fill;
        cell.firstElementChild.textContent = fill;
        cell.firstElementChild.classList.add('p-cell');
      }
    } else {
      if (gameBoard['third-row'][i - 7] === '') {
        gameBoard['third-row'][i - 7] = fill;
        cell.firstElementChild.textContent = fill;
        cell.firstElementChild.classList.add('p-cell');
      }
    }
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    playGame();
  });
});

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    e.target.classList.add('player-transition');
    e.target.addEventListener('animationend', () => {
      choosePlayer(e.target.textContent);
      chooseWeapon.classList.add('hidden');
      main.classList.remove('hidden');
      setDisplay();
    });
  });
});

adversarySelection.forEach((selection) => {
  selection.addEventListener('click', (e) => {
    const selected = e.target.closest('.selection');

    playerTwo = selected.classList.contains('computer')
      ? playerProto(null, 'Computer')
      : playerProto(null, 'Player Two');
    selected.classList.add('player-transition');

    selected.addEventListener('animationend', (e) => {
      selection
        .closest('.adversary-selection')
        .classList.add('hidden');
      chooseWeapon.classList.remove('hidden');
    });
  });
});
