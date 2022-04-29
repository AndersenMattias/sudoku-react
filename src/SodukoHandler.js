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

  // Call soduko board depending on which btn choosen
  export async function onCreateNewGame(lvl) {     
    switch (lvl) {
      case 1:
        try {
          const response = await SUDOKU.beginnerBoard();
          const data = await response.json();
          alert('start beginner?')
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;

      case 2:
        try {
          const response = await SUDOKU.intermediateBoard();
          const data = await response.json();
          alert('start intermediate?')
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;

      case 3:
        try {
          const response = await SUDOKU.masterBoard();
          const data = await response.json();
          alert('start master?')
          return data.game;
        } catch (error) {
          console.log(error);
        }
        break;
        default:
          throw new Error("Invalid action");
    }   
  }




