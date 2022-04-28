import React from "react";
import SudokuTile from "../SudokuTile/SudokuTile";

const GameBoard = ({ sudokuBoard, grid, onHandleChange }) => {
  return (
    <div className="board-wrapper">
      <SudokuTile sudokuBoard={sudokuBoard} grid={grid} onHandleChange={onHandleChange}  />
    </div>
  );
}

export default GameBoard;
