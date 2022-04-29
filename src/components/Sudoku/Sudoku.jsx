import React, { useState, useRef } from "react";

import {GridLayout,  copyArrFromTo,  onCreateNewGame, onValidateSudoku} from '../../SudokuHandler'

import GameBoard from "../GameBoard/GameBoard";
import GameBoardButtons from "../GameBoardButtons/GameBoardButtons";
import GameLvlButtons from "../GameLvlButtons/GameLvlButtons";



const Sudoku = () => {
  const [grid, setGrid] = useState(GridLayout);
  const [gameWonMsg, setGameWonMsg] = useState('You solved the Sudoku!');
  const initialGrid = useRef(GridLayout());


    // check if input is 0-9 and nothing else like -2, letters like a A 
  // create new array from current with new inputs from row/col and set to state
  function onHandleChange(row, col, e) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      if (Number(e.target.value) < 10 && initialGrid.current[row][col] === 0) {
        const newGrid = [...grid];
        newGrid[row][col] = Number(e.target.value);
        setGrid(newGrid);
      }
    }
  }

  async function onHandleChoosenLvl(action, lvl) {
    let newGrid;
    switch (action) {
      case 'beginner':
      newGrid = await onCreateNewGame(lvl);       
      break;

      case 'intermediate':
        newGrid = await onCreateNewGame(lvl);              
        break;

      case 'master':
          newGrid = await onCreateNewGame(lvl);          
          break;

        default:
          throw new Error('Invalid action');
    }
    copyArrFromTo(newGrid, initialGrid.current);  
    setGameWonMsg('');
    setGrid(newGrid);  

  }

  async function onHandleBtnAction(action) {
    let newGrid;
    switch (action) {
      case 'solveBoard':
        newGrid = await onValidateSudoku();
        setGrid(newGrid);
        break;

      case 'clear':
        newGrid = GridLayout();
        copyArrFromTo(newGrid, initialGrid.current);
        setGrid(newGrid);
        setGameWonMsg('');
        break;
     
      default:
        throw new Error('Invalid action');
    }
  }

  

  return (
    <div className='sudoku-wrapper'>
      <h1>Soduku</h1>
      
        <GameLvlButtons onHandleChoosenLvl={onHandleChoosenLvl}   />
        <GameBoard sudokuBoard={initialGrid.current} grid={grid} onHandleChange={onHandleChange} />
        <GameBoardButtons onHandleBtnAction={onHandleBtnAction}  />
    </div>
  )
}

export default Sudoku