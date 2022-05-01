import React, { useState } from 'react';
import { SUDOKU } from '../Api/api';

const GameBoardButtons = ({ onHandleBtnAction }) => {
  return (
    <div className='sudoku-buttonsContainer'>
      <button
        type='button'
        className='btn checkBtn'
        onClick={() => {
          onHandleBtnAction('check');
        }}
      >
        Check Soduku
      </button>
      <button
        type='button'
        className='btn solveBtn'
        onClick={() => {
          onHandleBtnAction('solve');
        }}
      >
        Solve Soduku
      </button>
      <button
        type='button'
        className='btn resetBtn'
        onClick={() => {
          onHandleBtnAction('clear');
        }}
      >
        Reset Board
      </button>
    </div>
  );
};

export default GameBoardButtons;
