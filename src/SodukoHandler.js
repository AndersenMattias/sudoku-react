import {SUDOKU} from '../src/components/Api/api'

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

  async function fetchBoard(sudoku) {
    try {
      const response = await sudoku;
      const data = await response.json();
      return data.game;
    } catch (e) {
      console.log(e);
    }
  }

  // Call soduko board depending on which btn choosen
  export async function onCreateNewGame(lvl) {     
    switch (lvl) {
      case 1:
        fetchBoard(SUDOKU.beginnerBoard());
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




