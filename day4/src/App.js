import React, { Component } from "react";
import animals from "./animalsData";
import Animals from "./Animals";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals
    };
  }
  render() {
    return (
      <div className="App">
        <Animals animals={this.state.animals} />
      </div>
    );
  }
}

export default App;
