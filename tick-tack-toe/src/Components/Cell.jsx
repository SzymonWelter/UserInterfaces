import React from "react";
import { connect } from 'react-redux';
import {newMove} from 'actions/ticktacktoe.actions';
function Cell(props) {
  return (
    <div className="col col-4">
      <div
        className={`cell ${
          props.board[props.id] ? `cell--${props.board[props.id]}` : ""
        } ${
            props.winner ? 'cell--disabled' : ''
        }`}
        id={props.id}
        onClick={e => onClick(e, props)}
      ></div>
    </div>
  );
}

function onClick(e, props){
    props.newMove(e.target.id, props.time);
}

const mapStateToProps = state => ({
  board: state.ticktacktoe.board,
  winner: state.ticktacktoe.winner,
  time: state.ticktacktoe.time
});
export default connect(mapStateToProps, { newMove })(Cell);

