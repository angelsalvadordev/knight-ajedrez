import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Boad";
import { observe } from "./components/Game";

const root = document.getElementById("root");

const app = (knightPosition) => (
  <React.StrictMode>
    <Board knightPosition={knightPosition} />
  </React.StrictMode>
);

observe((knightPosition) => ReactDOM.render(app(knightPosition), root));
