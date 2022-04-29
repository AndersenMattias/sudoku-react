const express = require('express')

const router = express.Router()

function copyArrFromTo(from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  }

router.post("/solve", (req, res) => {
    let gameBoard = [];
    let gameStatus;
    
   copyArrFromTo(req.body.board, gameBoard);
    let sudoku = new Sudoku(gameBoard);
    let solution = sudoku.isSolvable();
    let solvedSudoku;
  
    if (solution) {
      solvedSudoku = sudoku.solvedPuzzle;
      gameStatus = true;
    } else {
      solvedSudoku = req.body.board;
      gameStatus = false;
    }
    
    res.status(200).send({ solution: solvedSudoku, status: status });
  });
  
  router.post("/validate/:id", (req, res) => {
    let gameBoard = [];
    let id = req.body.id;
    console.log(id, req)
   copyArrFromTo(req.body.board, gameBoard);
    res.status(200).send({ status: 'validate' });
  });