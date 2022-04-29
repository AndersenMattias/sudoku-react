import {SUDOKU} from './components/Api/api'

// fill gridArray with numbers
    export function GridLayout() {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid[i] = Array(9).fill(0);
    }
    return grid;
  }
  
  
  export function copyArrFromTo(from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  }





  export async function fetchBoard(board) {
    try {
      const response = await SUDOKU.intermediateBoard();
      const data = await response.json();
      return data.game;
    } catch (e) {
      console.log(e);
    }
  }

  // Call sudoku board depending on which btn choosen
  export async function onCreateNewGame(lvl) {     
    switch (lvl) {
      case 1:
        try {
          const response = await SUDOKU.beginnerBoard();
          const data = await response.json();
          return data.game;
        } catch (e) {
          console.log(e);
        }
        break;

      case 2:
        try {
          const response = await SUDOKU.intermediateBoard();
          const data = await response.json();
          return data.game;
        } catch (e) {
          console.log(e);
        }
        break;

      case 3:
        try {
          const response = await SUDOKU.masterBoard();
          const data = await response.json();
          return data.game;
        } catch (e) {
          console.log(e);
        }
        break;
        default:
          throw new Error("Invalid action");
    }   
  }




