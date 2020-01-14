import React from "react";
import Cell from "./Cell.jsx";
import { newGame } from "actions/ticktacktoe.actions.js";
import { connect } from "react-redux";

function Board(props) {
  return (
    <div className="board">
      <div className="row">
        {[...Array(9)].map((_, index) => (
          <Cell key={index} id={index}></Cell>
        ))}
      </div>
      <div className='newgame-wrapper'>
        {props.winner ? (
          <button className="newgame-button" onClick={props.newGame}>
            New Game
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  winner: state.ticktacktoe.winner
});

export default connect(mapStateToProps, { newGame })(Board);
