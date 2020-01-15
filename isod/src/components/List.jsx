import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "actions/isodActions";
import Element from "./Element";

class List extends Component {
  render() {
    if (!this.props.items) {
      this.props.fetchItems();
    }
    return (
      <ul>
        {this.props.items &&
          this.props.items.map((v, i) => (
            <li key={i}>
              <Element
                title={v.title}
                supervisor={`${v.supervisor_firstname} ${v.supervisor_lastname}`}
                orgUnit={v.orgUnitFull}
              />
            </li>
          ))}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  items: state.isod.items
});

export default connect(mapStateToProps, { fetchItems })(List);
