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
   
  };
  