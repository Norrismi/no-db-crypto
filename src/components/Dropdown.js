import React, { Component } from "react";
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "200"
    };

    this.dropdown = this.dropdown.bind(this);
  }
  //dropdown button
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  dropdown(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        {/* Button */}
        <section className="sectionRight">
          <div className="dropdown">
            <button className="dropbtn">Number of coins to display</button>
            <select
              value={this.state.value}
              onChange={this.dropdown}
              className="dropdown-content"
            >
              <option value="10">10 currencies</option>
              <option value="25">25 currencies</option>
              <option value="50">50 currencies</option>
              <option value="75">75 currencies</option>
              <option value="100">List All</option>
            </select>
          </div>
        </section>
      </div>
    );
  }
}
export default Dropdown;
