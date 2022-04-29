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






