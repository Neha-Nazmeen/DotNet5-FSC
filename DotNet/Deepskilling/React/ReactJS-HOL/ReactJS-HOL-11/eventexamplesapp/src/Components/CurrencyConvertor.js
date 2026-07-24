import React, { Component } from "react";

const RATE_INR_TO_EUR = 0.011;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const euros = (parseFloat(this.state.rupees || 0) * RATE_INR_TO_EUR).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div className="currency-convertor">
        <h2>Currency Convertor (INR to EUR)</h2>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter amount in Rupees"
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euros !== null && (
          <p>
            {this.state.rupees} INR = {this.state.euros} EUR
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
