import React, { Component } from "react";

import "./Header.css";
import logo from "../logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>My New App</h1>

        <img src={logo} alt="React logo" />
      </header>
    );
  }
}

export default Header;
