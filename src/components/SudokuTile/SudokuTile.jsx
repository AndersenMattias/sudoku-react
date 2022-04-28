import React from "react";

const SudokuTile = ({ sudokuBoard, grid, onHandleChange }) => {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return (
        <input
          className={
            sudokuBoard[rowIndex][colIndex] !== 0
              ? "initial"
              : col !== 0
              ? "empty taken"
              : "empty"
          }
          value={col === 0 ? "" : col}
          key={rowIndex + " " + colIndex}
          type="text"
          onChange={(e) => onHandleChange(rowIndex, colIndex, e)}
        />
      );
    });
  });
}

export default SudokuTile;
