import React from 'react';
import SudokuTile from '../SudokuTile';

const GameBoard = ({ grid, onHandleChange, correctInput, setCorrectInput }) => {
  if (grid == null) {
    return (
      <div className='board-wrapper'>
        <table className='grid-table'>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={(rowIndex + 1) % 3 === 0 ? 'bottom-border' : ''}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                    return (
                      <td
                        key={rowIndex + colIndex}
                        className={(col + 1) % 3 === 0 ? 'right-border' : ''}
                      >
                        <input className='tile' disabled={true} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className='board-wrapper'>
        <table className='grid-table'>
          <tbody>
            {grid &&
              grid.map((row, rowIndex) => {
                return (
                  <tr
                    className={(rowIndex + 1) % 3 === 0 ? 'bottom-border' : ''}
                    key={rowIndex}
                  >
                    {row.map((cell, columnIndex) => {
                      return (
                        <SudokuTile
                          grid={grid}
                          onHandleChange={onHandleChange}
                          correctInput={correctInput}
                          setCorrectInput={setCorrectInput}
                          cell={cell}
                          row={rowIndex}
                          col={columnIndex}
                        />
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default GameBoard;
