import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import AdminForm from "./components/Admin/adminForm";
import Products from "./components/product/productMain";
import Register from "./components/authForm/register";
import Login from "./components/authForm/login";
import DashBoard from "./components/dashboard/dashboard";

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
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
