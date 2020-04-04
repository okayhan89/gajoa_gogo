import React from 'react';
import '../App.css';
import Header from "../Header/Header"
import BoardBody from "../Component/BoardBody"

function Board() {
  return (
    <div className="App">
      <header className="App-header">
         <BoardBody></BoardBody>
      </header>
    </div>
  );
}

export default Board;
