export const SUDOKU = {
    beginnerBoard:  () => {
      return fetch(`https://sudoku-react-nodejs.herokuapp.com/beginner-game`);
    },
    intermediateBoard:  () => {
      return fetch(`https://sudoku-react-nodejs.herokuapp.com/intermediate-game`);
    },
    masterBoard:  () => {
      return fetch(`https://sudoku-react-nodejs.herokuapp.com/master-game`);
    },
    solveBoard:  (grid) => {
      const data = {
        board: grid,
      };
      return fetch(`https://sudoku-react-nodejs.herokuapp.com/solve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    validateBoard:  (grid) => {
      const data = {
        board: grid,
      };
      return fetch(`https://sudoku-react-nodejs.herokuapp.com/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
   
  };

