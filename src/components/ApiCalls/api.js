export const SUDOKU = {
    beginnerBoard:  () => {
      return fetch(`http://localhost:5000/beginner-game`);
    },
    intermediateBoard:  () => {
      return fetch(`http://localhost:5000/intermediate-game`);
    },
    masterBoard:  () => {
      return fetch(`http://localhost:5000/master-game`);
    },
   
  };
  