import React, { useState, useRef } from "react";
import { SUDOKU } from "../ApiCalls/api";
import GameBoard from "../GameBoard/GameBoard";
import GameBoardButtons from "../GameBoardButtons/GameBoardButtons";

import GameLvlButtons from "../GameLvlButtons/GameLvlButtons";

// fills gridArray with numbers
function GridLayout() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid[i] = Array(9).fill(0);
  }
  return grid;
}


function copyArrFromTo(from, to) {
  for (let i = 0; i < from.length; i++) {
    to[i] = [...from[i]];
  }
}

const Sudoku = () => {
  const [grid, setGrid] = useState(GridLayout);
  const [gameStatus, setGameStatus] = useState('You solved the Soduku!');
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
      copyArrFromTo(newGrid, initialGrid.current);    

      break;

      case 'intermediate':
        newGrid = await onCreateNewGame(lvl);
        copyArrFromTo(newGrid, initialGrid.current);  
       
        break;

      case 'master':
          newGrid = await onCreateNewGame(lvl);
          copyArrFromTo(newGrid, initialGrid.current);
  
          break;

        default:
          throw new Error("Invalid action");
    }
    
    setGameStatus('');
    setGrid(newGrid);  

  }

  async function onCreateNewGame(lvl) {     
    switch (lvl) {
      case 1:
        try {
          const response = await SUDOKU.beginnerBoard();
          const data = await response.json();
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;

      case 2:
        try {
          const response = await SUDOKU.intermediateBoard();
          const data = await response.json();
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;

      case 3:
        try {
          const response = await SUDOKU.masterBoard();
          const data = await response.json();
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;
        default:
          throw new Error("Invalid action");
    }   
  }

  async function onHandleBtnAction(action) {
    let newGrid;
    switch (action) {

      case "clear":
        newGrid = GridLayout();
        copyArrFromTo(newGrid, initialGrid.current);
        setGrid(newGrid);
        setGameStatus('');
        break;
     
      default:
        throw new Error("Invalid action");
    }
  }

  

  return (
    <div className="sudoku-wrapper">
      <h1>Soduku</h1>
      
        <GameLvlButtons onHandleChoosenLvl={onHandleChoosenLvl} />
        <GameBoard sudokuBoard={initialGrid.current} grid={grid} onHandleChange={onHandleChange} />
        <GameBoardButtons onHandleBtnAction={onHandleBtnAction}  />
    </div>
  )
}

export default Sudoku