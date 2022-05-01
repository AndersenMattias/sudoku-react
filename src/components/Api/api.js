export const SUDOKU = {
  getSudoku: () => {
    return fetch(`http://localhost:5000/sudoku/`);
  },
  solveBoard: (grid) => {
    const data = {
      board: grid,
    };
    return fetch(`http://localhost:5000/solve`, {
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
    return fetch(`http://localhost:5000/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
