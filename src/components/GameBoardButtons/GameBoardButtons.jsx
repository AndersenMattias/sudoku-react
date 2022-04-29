import React from 'react'

const GameBoardButtons = ({onHandleBtnAction}) => {
  return (
    <div className='sudoku-buttonsContainer'>
        <button type='button' className='btn checkBtn' >Check Soduku</button>
        <button type='button' className='btn solveBtn' onClick={() => {onHandleBtnAction('solve')}}>Solve Soduku</button>
        <button type='button' className='btn resetBtn' onClick={() => {onHandleBtnAction('clear')}}>Reset Board</button>
    </div>
  )
}

export default GameBoardButtons