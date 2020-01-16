import React from "react";
import { connect } from "react-redux";

function GameDialog(props) {

  const counter = time => time === -1 ? '' : `, ${time}s`;

  return (
    <div className="game-dialog">
      <h2>{props.text}</h2>
      {props.winner ? (
        props.winner !== "d" ? (
          <h3>{props.winner.toUpperCase()} win!</h3>
        ) : (
          <h3>Draft!</h3>
        )
      ) : (
        <h3>{props.currentUser.toUpperCase()} turn{counter(props.time)}</h3>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  winner: state.ticktacktoe.winner,
  currentUser: state.ticktacktoe.currentUser,
  time: state.ticktacktoe.time
});
export default connect(mapStateToProps)(GameDialog);
