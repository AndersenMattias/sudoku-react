const express = require('express')

const router = express.Router()


const beginnerSoduku = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
]
const intermediateSoduku = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 0, 3, 0, 0, 5],
  [0, 5, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 0, 0, 6, 3, 0, 0],
]
const sodukuMaster = [
  [3, 0, 0, 0, 0, 0, 4, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [9, 0, 0, 8, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 9, 0, 6, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 0, 0, 0, 3, 0, 0],
]

router.get("/beginner-game", (req, res) => {
    let sodukuOne = beginnerSoduku;
    res.status(200).send({ game: sodukuOne });
  });

router.get("/intermediate-game", (req, res) => {
    let sodukuTwo = intermediateSoduku;
    res.status(200).send({ game: sodukuTwo });
  });
  
router.get("/master-game", (req, res) => {
    let sodukuThree = sodukuMaster;
    res.status(200).send({ game: sodukuThree });
  });
  


module.exports = router;
