import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import AdminForm from "./components/Admin/adminForm";
import Products from "./components/product/productMain";
import Register from "./components/authForm/register";
import Login from "./components/authForm/login";
import Issue from "./components/error/error";
import DashBoard from "./components/dashboard/dashboard";
import Landing from "./components/landing/landing";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Cart from "./components/cart/cart";
import "./App.css";

class App extends Component {
  render() {
    //console.log(this.props.location);
    return (
      <div>
        <NavBar />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={450}
            classNames="fade"
          >
            <Switch location={this.props.location}>
              <Route exact path="/" component={Landing} />
              <Route path="/admin" component={AdminForm} />
              <Route path="/products" component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="/signup" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={DashBoard} />
              <Route component={Issue} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
