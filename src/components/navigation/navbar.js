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
import { logout } from "../../store/actions/authAction";

import { Link } from "react-router-dom";

const NavBar = props => {
  const logoutHander = () => {
    if (window.confirm("Are you logging out?")) {
      props.logout();
    }
  };
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
            {props.authStatus.isAuth ? (
              <NavItem>
                <NavLink onClick={logoutHander} style={{ cursor: "pointer" }}>
                  Logout
                </NavLink>
              </NavItem>
            ) : null}
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
                    <i
                      style={{ marginRight: "10px" }}
                      className="fas fa-sign-in-alt"
                    />
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    <i
                      style={{ marginRight: "10px" }}
                      className="fas fa-user-plus"
                    />
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
