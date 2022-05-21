import Button from 'components/Button';
import React from 'react';

const ActionsButtons = ({ onHandleBtnAction }) => {
  return (
    <div className='sudoku-buttonsContainer'>
      <Button
        buttonStyle='btn--warning'
        onClick={() => {
          onHandleBtnAction('hint');
        }}
        text='Hint'
      />

      <Button
        buttonStyle='btn--success'
        onClick={() => {
          onHandleBtnAction('solve');
        }}
        text='Solve Suduko'
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

export default ActionsButtons;
