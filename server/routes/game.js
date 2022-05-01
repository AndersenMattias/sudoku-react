const express = require('express');

const router = express.Router();

const sudokuBoard = [
  [1, 5, 4, 8, 7, 3, 2, 9, 6],
  [3, 8, 6, 5, 9, 2, 7, 1, 4],
  [7, 2, 9, 6, 4, 1, 8, 3, 5],
  [8, 6, 3, 7, 2, 5, 1, 4, 9],
  [9, 7, 5, 3, 1, 4, 6, 2, 8],
  [4, 1, 2, 9, 6, 8, 3, 5, 7],
  [6, 3, 1, 4, 5, 7, 9, 8, 2],
  [5, 9, 8, 2, 3, 6, 4, 7, 1],
  [2, 4, 7, 1, 8, 9, 5, 6, 3],
];

router.get('/sudoku', (req, res) => {
  res.status(200).send({ game: sudokuBoard });
});

router.post('/check', (req, res) => {
  try {
    let result = [];
    let solutionToCheck = req.body.board;
    let solution = sudokuBoard;

    for (let row = 0; row < solutionToCheck.length; row++) {
      let checkedRow = solutionToCheck[row].map((col, index) => {
        if (col === 0) return 0;
        if (col === solution[row][index]) return 1;
        return -1;
      });
      result.push(checkedRow);
    }
    res.status(200).send({ result: result });
  } catch (e) {
    console.log(e);
    return;
  }
});

router.post('/solve', (req, res) => {
  try {
    let solvedSudoku = [];
    let gameWon = true;
    let solutionToCheck = req.body.board;
    let solution = sudokuBoard;

    for (let row = 0; row < solutionToCheck.length; row++) {
      let checkedRow = solutionToCheck[row].map((col, index) => {
        if (col === solution[row][index]) {
          return 1;
        } else if (col === 0) {
          gameWon = false;
          return 0;
        } else {
          gameWon = false;
          return -1;
        }
      });
      solvedSudoku.push(checkedRow);
    }
    res.status(200).send({ board: sudokuBoard, gameStatus: gameWon });
  } catch (e) {
    console.log(e);
    return;
  }
});

module.exports = router;
