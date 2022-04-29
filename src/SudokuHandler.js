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


  function isValidPlace (grid, row, column, number) {
    for (let i = 0; i < 9; i++) {
      if (grid[i][column] === number) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number) {
        return false;
      }
    }
    let localBoxRow = row - (row % 3);
    let localBoxCol = column - (column % 3);
    for (let i = localBoxRow; i < localBoxRow + 3; i++) {
      for (let j = localBoxCol; j < localBoxCol + 3; j++) {
        if (grid[i][j] === number) {
          return false;
        }
      }
    }
    return true;
  }


function solve(grid) {
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    if (grid[row][col] === 0) {
      for (let possibleNumber = 1; possibleNumber <= 9; possibleNumber++) {
        if (isValidPlace(grid, row, col, possibleNumber)) {
          grid[row][col] = possibleNumber;
          if (solve(grid)) {
            return true;
          }
          grid[row][col] = 0;
        }
      }
      return false;
    }
  }
}
return true;
}






