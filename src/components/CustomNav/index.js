import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="custom-nav">
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/" className="mr-auto d-flex align-items-center" style={{ color: "#f9f9f9", flex: 1 }}>
          <div className="text-center w-100">
            <span style={{ color: "#F7D02C", fontWeight: "bold" }}>Pokemoner.io</span>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
            <NavLink href="/logout" style={{ color: "#FFFFFF", border: "1px solid #FFFFFF", padding: "8px 8px", borderRadius: "4px", fontWeight: "bold" }}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
