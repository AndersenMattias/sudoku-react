import React from 'react';

import '../../styles/tile.scss';

const Tile = ({ onHandleChange, correctInput, cell, row, col }) => {
  const getCellClassName = (cell) => {
    let className = `cell 
    ${cell === 0 ? 'cell-empty' : 'cell-initial'}
    ${correctInput === false ? 'cell-invalid' : ''}
    `;
    return className;
  };

  return (
    <td className={(col + 1) % 3 === 0 ? 'right-border' : ''}>
      <input
        className={getCellClassName(cell)}
        type='text'
        onChange={(e) => onHandleChange(row, col, e)}
        value={cell ? cell : ''}
      />
    </td>
  );
};

export default Tile;
