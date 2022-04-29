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

    console.log(req)

    res.status(200).send({ status: ':(' });
  });
  
