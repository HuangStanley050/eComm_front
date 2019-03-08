import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import AdminForm from "./components/Admin/adminForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/admin" component={AdminForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
