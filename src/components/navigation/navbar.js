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

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Framework Shop App</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <i
                  style={{ marginRight: "10px" }}
                  className="fas fa-shopping-cart"
                />
                Shopping Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/admin">
                <i style={{ marginRight: "10px" }} className="fas fa-tasks" />
                Admin
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
