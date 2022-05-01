import React from 'react';

const SudokuTile = ({ grid, onHandleChange, correctInput, cell, row, col }) => {
  return (
    <td className={(col + 1) % 3 === 0 ? 'right-border' : ''}>
      <input
        className='tile'
        type='text'
        onChange={(e) => onHandleChange(row, col, e)}
        value={cell ? cell : ''}
      />
    </td>
  );
};

export default SudokuTile;
