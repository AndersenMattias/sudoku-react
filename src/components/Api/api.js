export const SUDOKU = {
  getSudoku: () => {
    return fetch(`https://sudoku-react-nodejs.herokuapp.com/sudoku/`);
  },
  solveBoard: (grid) => {
    const data = {
      board: grid,
    };
    return fetch(`https://sudoku-react-nodejs.herokuapp.com/solve/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: (grid) => {
    const data = {
      board: grid,
    };
    return fetch(`https://sudoku-react-nodejs.herokuapp.com/check/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
