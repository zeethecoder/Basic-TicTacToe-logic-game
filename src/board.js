import React from "react";

export function Board(props) {
  return (
    <div className="TicTacToeBoard">
      {props.board.map((row, y) => (
        <div className="Row">
          {row.map((column, x) => (
            <div className="Cell" onClick={() => props.onClick(y, x)}>
              {column}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
