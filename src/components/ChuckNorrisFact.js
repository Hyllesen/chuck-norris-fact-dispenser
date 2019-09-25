import React, { Component } from "react";
import "./ChuckNorrisFact.css";

export default class ChuckNorrisFact extends Component {
  state = {
    chuckNorrisFact: {},
    className: ""
  };

  componentDidMount() {
    this.fetchChuckNorrisFact();
  }

  fetchChuckNorrisFact = () => {
    this.setState({ className: "" });
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ chuckNorrisFact: json });
        this.setState({ className: "animated bounceIn" });
      });
  };

  render() {
    return (
      <div className="helloWorld">
        <h2 className={this.state.className}>
          {this.state.chuckNorrisFact.value}
        </h2>
        <img src={this.state.chuckNorrisFact.icon_url} />
        <br />
        <button className="myButton" onClick={this.fetchChuckNorrisFact}>
          Give me another Chuck Norris fact
        </button>
      </div>
    );
  }
}
