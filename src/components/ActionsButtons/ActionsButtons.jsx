import Button from 'components/Button';
import React from 'react';

const ActionsButtons = ({ onHandleBtnAction, isPlayerWon }) => {
  return (
    <div className='sudoku-buttonsContainer'>
      <Button
        disabled={isPlayerWon}
        buttonStyle='btn--warning'
        onClick={() => {
          onHandleBtnAction('hint');
        }}
        text='Hint'
      />

      <Button
        disabled={isPlayerWon}
        type='button'
        buttonStyle='btn--success'
        onClick={() => {
          onHandleBtnAction('solve');
        }}
        text='Solve Suduko'
      />

      <Button
        type='button'
        buttonStyle='btn--danger'
        onClick={() => {
          onHandleBtnAction('reset');
        }}
        text='Reset'
      />
    </div>
  );
};

export default ActionsButtons;
