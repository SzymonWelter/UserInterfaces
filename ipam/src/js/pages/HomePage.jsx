import React from "react";
import { connect } from "react-redux";
function HomePage(props) {
  return (
    <div className="page-wrapper page-wrapper--border-radius">
      <h2 className="page-header">Home</h2>
      <h3 className="page-header">Welcome {props.user}</h3>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user.id
});
export default connect(mapStateToProps)(HomePage);
