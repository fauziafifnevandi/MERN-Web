import InputNumber from "elements/Form/InputNumber";
import React, { Component } from "react";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            ></InputNumber>
          </div>
        </div>
      </div>
    );
  }
}
