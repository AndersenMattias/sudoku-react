import React, { useState } from 'react';

import { GridLayout } from '../../utility/SudukoGrid';

import GameBoard from '../GameBoard';
import ActionsButtons from '../ActionsButtons';
import DifficultyModal from 'components/DifficultyModal/DifficultyModal';
import Button from 'components/Button';
import GameWonModal from 'components/GameWonModal/GameWonModal';

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

const Sudoku = () => {
  // layout
  const [grid, setGrid] = useState();
  const [initialGrid, setInitialGrid] = useState(sudokuBoard);
  const [hintsTaken, setHintsTaken] = useState(0);

  const [correctInput, setCorrectInput] = useState();

  const [gameMode, setGameMode] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [isPlayerWon, setIsPlayerWon] = useState(false);

  //modals
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [showGameWonModal, setGameWonModal] = useState(false);

  const buildBoard = (tilesToRemove) => {
    let remainingTiles = tilesToRemove;
    const copiedArr = JSON.parse(JSON.stringify(initialGrid));

    while (remainingTiles > 0) {
      for (let row = 0; row < copiedArr[0].length; row++) {
        let currentRow = copiedArr[row].map((col, colIdx) => {
          if (colIdx < 10) {
            let chance = Math.random() * 100;
            if (chance > 90) {
              copiedArr[row][colIdx] = 0;
              remainingTiles -= 1;
            }
          }
        });
      }
    }
    setGrid(copiedArr);
    setGameStarted(!gameStarted);
    setShowDifficultyModal(!showDifficultyModal);
  };

  // check if input is 0-9 and nothing else like -2, letters like a A
  // create new array from current with new inputs from row/col and set to state
  function onHandleChange(row, col, e) {
    if (e.target.value === '') {
      const newGrid = [...grid];
      newGrid[row][col] = 0;
      setGrid(newGrid);
    }
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      if (Number(e.target.value) < 10 && grid[row][col] === 0) {
        const newGrid = [...grid];
        newGrid[row][col] = Number(e.target.value);
        setGrid(newGrid);
      }
    }
  }

  function getHint() {
    let place = null;

    while (!place) {
      let col = Math.floor(Math.random() * 8) + 1;
      let row = Math.floor(Math.random() * 8) + 1;
      if (grid[row][col] === 0) {
        place = { row, col };
      }
    }
    /*
    setTimeout(() => {
      setGrid(grid);
    }, 10000);
    */

    setGrid((currGrid) => {
      let newGrid = JSON.parse(JSON.stringify(currGrid));
      newGrid[place.row][place.col] = initialGrid[place.row][place.col];
      console.log(newGrid[place.row][place.col]);
      console.log(initialGrid[place.row][place.col]);
      return newGrid;
    });
    setHintsTaken((hints) => hints + 1);
  }

  async function onHandleChoosenLvl(action) {
    switch (action) {
      case 'easy':
        buildBoard(30);
        setGameMode('Easy');
        break;

      case 'medium':
        buildBoard(50);
        setGameMode('Medium');
        break;

      case 'hard':
        buildBoard(90);
        setGameMode('Hard');
        break;

      default:
        throw new Error('Invalid action');
    }
  }

  async function onSolveSudoku() {
    try {
      setIsPlayerWon(true);
      setGrid(initialGrid);
    } catch (error) {
      console.log(error);
    }
  }

  async function onHandleBtnAction(action) {
    let newGrid;
    switch (action) {
      case 'solve':
        onSolveSudoku();
        setGameWonModal(true);

        break;

      case 'hint':
        getHint();
        break;

      case 'clear':
        newGrid = GridLayout();
        setGrid(newGrid);
        setGameStarted(false);
        break;

      default:
        throw new Error('Invalid action');
    }
  }

  function playAgain() {
    let newGrid = GridLayout();
    setGameWonModal(!showGameWonModal);
    setShowDifficultyModal(!showDifficultyModal);
    setGrid(newGrid);
    setGameStarted(false);
  }

  return (
    <div className='sudoku-wrapper'>
      <h1>Sudoku</h1>

      {showDifficultyModal && (
        <DifficultyModal
          onHandleChoosenLvl={onHandleChoosenLvl}
          closeModal={() => setShowDifficultyModal((show) => !show)}
        />
      )}

      <GameBoard
        grid={grid}
        onHandleChange={onHandleChange}
        correctInput={correctInput}
        setCorrectInput={setCorrectInput}
      />

      {showGameWonModal && (
        <GameWonModal
          hintsTaken={hintsTaken}
          gameMode={gameMode}
          isPlayerWon={isPlayerWon}
          closeModal={() => setGameWonModal((show) => !show)}
          playAgain={playAgain}
        />
      )}

      {gameStarted && (
        <ActionsButtons
          onHandleBtnAction={onHandleBtnAction}
          showDifficultyModal={showDifficultyModal}
          setShowDifficultyModal={setShowDifficultyModal}
        />
      )}

      {!gameStarted && (
        <Button
          buttonStyle='btn--primary'
          onClick={() => {
            setShowDifficultyModal(!showDifficultyModal);
          }}
          text='New Game'
        />
      )}
    </div>
  );
};

export default Sudoku;
