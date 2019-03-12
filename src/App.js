import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import AdminForm from "./components/Admin/adminForm";
import Products from "./components/product/productMain";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/admin" component={AdminForm} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
