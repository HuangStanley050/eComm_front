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

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Framework Shop App</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">
                <i
                  style={{ marginRight: "5px" }}
                  className="fas fa-shopping-cart"
                />
                Shopping Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <i style={{ marginRight: "5px" }} className="fas fa-tasks" />
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
