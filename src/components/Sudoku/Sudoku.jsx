import React, { useState, useRef, useEffect } from 'react';

import { getDeepCopy, GridLayout } from '../../SudokuHandler';
import { SUDOKU } from '../Api/api';

import GameBoard from '../GameBoard/GameBoard';
import GameBoardButtons from '../GameBoardButtons/GameBoardButtons';
import GameLvlButtons from '../GameLvlButtons/GameLvlButtons';

const Sudoku = () => {
  const [grid, setGrid] = useState(GridLayout());
  const [initialGrid, setInitialGrid] = useState();
  const [gameWonMsg, setGameWonMsg] = useState('You solved the Sudoku!');
  const [correctInput, setCorrectInput] = useState();
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const fetchSuduko = async () => {
      try {
        const response = await SUDOKU.getSudoku();
        const data = await response.json();
        console.log(data.game);
        setInitialGrid(data.game);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSuduko();
  }, []);

  const buildBoard = (tilesToRemove) => {
    let remainingTiles = tilesToRemove;
    console.log(initialGrid);
    console.log(grid);
    // let constructedBoard = [...initialGrid];
    // let initialBoard = [...initialGrid];

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
    console.log(copiedArr);
    setGrid(copiedArr);
  };

  console.log('initialGrid EFTER buildBoard' + initialGrid);
  console.log('grid EFTER buildBoard' + grid);

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

  async function onHandleChoosenLvl(action, lvl) {
    switch (action) {
      case 'beginner':
        buildBoard(10);
        break;

      case 'intermediate':
        buildBoard(20);
        break;

      case 'master':
        buildBoard(30);
        break;

      default:
        throw new Error('Invalid action');
    }
    // getDeepCopy(newGrid, initialGrid.current);
    setGameWonMsg('');
  }

  async function onSolveSudoku() {
    try {
      setGrid(initialGrid);
      console.log('initialGRID ' + initialGrid);
    } catch (error) {
      console.log(error);
    }
  }

  async function onHandleBtnAction(action) {
    let newGrid;
    switch (action) {
      case 'solve':
        onSolveSudoku();
        break;

      case 'check':
        try {
          const response = await SUDOKU.validateBoard(grid);
          const data = await response.json();
          console.log(data);
          setCorrectInput(data.result);
          return data.result;
        } catch (error) {
          console.log(error);
        }
        break;

      case 'clear':
        newGrid = GridLayout();
        // getDeepCopy(newGrid, initialGrid.current);
        setGrid(newGrid);
        setGameWonMsg('');
        setGameStarted(false);
        break;

      default:
        throw new Error('Invalid action');
    }
  }

  return (
    <div className='sudoku-wrapper'>
      <h1>Soduku</h1>

      <GameLvlButtons
        gameStarted={gameStarted}
        onHandleChoosenLvl={onHandleChoosenLvl}
      />
      <GameBoard
        initialGrid={initialGrid}
        grid={grid}
        onHandleChange={onHandleChange}
        correctInput={correctInput}
      />
      <GameBoardButtons onHandleBtnAction={onHandleBtnAction} />
    </div>
  );
};

export default Sudoku;
