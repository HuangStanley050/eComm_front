import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
