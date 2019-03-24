import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Framework Shop App</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/products">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cart">
                <i
                  style={{ marginRight: "10px" }}
                  className="fas fa-shopping-cart"
                />
                Shopping Cart
              </NavLink>
            </NavItem>
            {props.authStatus.userInfo.hasOwnProperty("admin") ? (
              <NavItem>
                <NavLink tag={Link} to="/admin">
                  <i style={{ marginRight: "10px" }} className="fas fa-tasks" />
                  Admin
                </NavLink>
              </NavItem>
            ) : null}
            {!props.authStatus.isAuth ? (
              <React.Fragment>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Register
                  </NavLink>
                </NavItem>
              </React.Fragment>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authStatus: state.auth
  };
};

export default connect(mapStateToProps)(NavBar);
