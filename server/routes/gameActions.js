const express = require('express');
const { SUDUKO } = require('../SudokuHandler');

const router = express.Router()

function copyArrFromTo(from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  }

export function onCheckValidation(grid) {
    if (SUDUKO.isValidSudoku(grid)) {
      return true;
    }
    return false;
  }

  
router.post("/solve/:id", (req, res) => {
    let gameBoard = [];
    let gameStatus;
    let solvedSudoku;
    copyArrFromTo(req.body.board, gameBoard);
    
    let sudoku = req.body.board;
    //check if board is validGame
    let solution = sudoku.onCheckValidation(req.body.board);
  
    if (solution) {
        console.log('if' + 'spel löst')
      solvedSudoku = gameBoard;
      gameStatus = true;
    } else {
        console.log('else' + 'spel inte löst')
      solvedSudoku = req.body.board;
      gameStatus = false;
    }
    
    res.status(200).send({ solution: solvedSudoku, status: gameStatus });
  });
  
