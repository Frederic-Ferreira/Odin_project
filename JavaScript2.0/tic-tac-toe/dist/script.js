const gameBoard = {
  'first-row': ['', '', ''],
  'second-row': ['', '', ''],
  'third-row': ['', '', ''],
};

const winning1 =
  gameBoard['first-row'][0] === gameBoard['first-row'][1] &&
  gameBoard['first-row'][1] === gameBoard['first-row'][2];
const winning2 =
  gameBoard['first-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['third-row'][2];
const winning3 =
  gameBoard['first-row'][0] === gameBoard['second-row'][0] &&
  gameBoard['first-row'][0] === gameBoard['second-row'][0];
const winning4 =
  gameBoard['second-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['second-row'][2];
const winning5 =
  gameBoard['third-row'][0] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][2];
const winning6 =
  gameBoard['third-row'][0] === gameBoard['third-row'][1] &&
  gameBoard['third-row'][1] === gameBoard['third-row'][2];
const winning7 =
  gameBoard['third-row'][1] === gameBoard['second-row'][1] &&
  gameBoard['second-row'][1] === gameBoard['first-row'][1];
const winning8 =
  gameBoard['third-row'][2] === gameBoard['second-row'][2] &&
  gameBoard['second-row'][2] === gameBoard['first-row'][2];

const winningCombinations = [
  winning1,
  winning2,
  winning3,
  winning4,
  winning5,
  winning6,
  winning7,
  winning8,
];

const playerProto = (choice) => {
  return {
    choice: choice,
    score: 0,
  };
};

const checkWinner = () => {
  winningCombinations.forEach((check) => {
    if (check) return true;
  });
};
