import React from 'react';
import GameDialog from './GameDialog.jsx';
import Board from './Board.jsx';

function App(props) {
  return (
    <div className="container">
      <GameDialog text='Tick tack toe'></GameDialog>
      <Board></Board>
    </div>
  );
}

export default App;
