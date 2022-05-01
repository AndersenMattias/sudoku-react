import Button from 'components/Button';
import React from 'react';

const GameBoardButtons = ({ onHandleBtnAction }) => {
  return (
    <div className='sudoku-buttonsContainer'>
      <Button
        buttonStyle='btn--warning'
        onClick={() => {
          onHandleBtnAction('check');
        }}
        text='Check Soduku'
      />

      <Button
        buttonStyle='btn--success'
        onClick={() => {
          onHandleBtnAction('solve');
        }}
        text='Solve Soduku'
      />

      <Button
        buttonStyle='btn--danger'
        onClick={() => {
          onHandleBtnAction('clear');
        }}
        text='Reset Board'
      />
    </div>
  );
};

export default GameBoardButtons;
