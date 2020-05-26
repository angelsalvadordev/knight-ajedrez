import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";

// Logic
const renderSquare = (i, knightPosition) => {
  const x = i % 8; // ejm: 1 % 8 = 1; 2 % 8 = 2
  const y = Math.floor(i / 8); // ejm: 1 / 8 = 0; 2 / 8 = 0
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};

const renderPiece = (x, y, [knightX, knightY]) => {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
};

// Component
const Board = ({ knightPosition }) => {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;
