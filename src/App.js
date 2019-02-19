import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>App Component</h2>

        <footer>
          <p>Made with EPINEPHRINE @ Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
