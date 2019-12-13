import React from 'react';
import {Station} from './Station'
import { DataSet } from "./data";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataSet,
      selected: undefined
    };
  }

  selected = e => {
    var id = e.target.value;
    for (var idx in this.state.data.stations) {
      var s = this.state.data.stations[idx];
      if (s.id === parseInt(id)) {
        this.setState({ selected: s });
        return;
      }
    }
  };

  onChangeValue = (station, e) => {
    let v = e.target.value;
    station.value = v;
    this.setState({ data: this.state.data });
  };

  updateColor = () => {
    var e = document.getElementById("input-expected");
    if (e) {
      //var v = parseInt(e.value);
      e.style.color = this.getColorForVariance();
    }
  };

  getColorForVariance = () => {
    var v = this.state.selected.value - this.state.selected.expected;
    return v >= 0 ? "green" : "red";
  };

  componentDidMount() {
    //this.updateColor();
  }

  componentDidUpdate() {
    //this.updateColor();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <select name="stations" multiple onChange={this.selected}>
                {this.state.data.stations.map((s, idx) => {
                  return (
                    <option key={idx} value={s.id}>
                      {s.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <Station
                onChangeValue={this.onChangeValue}
                station={this.state.selected}
                colorForVariance={this.getColorForVariance}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
