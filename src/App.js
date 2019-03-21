import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import AdminForm from "./components/Admin/adminForm";
import Products from "./components/product/productMain";
import Register from "./components/authForm/register";

import Cart from "./components/cart/cart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/admin" component={AdminForm} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/signup" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
