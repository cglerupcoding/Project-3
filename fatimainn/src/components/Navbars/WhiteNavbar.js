import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
             Fatima Inn
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
             Fatima Inn
            </UncontrolledTooltip> 
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">incio</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="sections#pricing">Habitaciones</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="examples#pricing">Contáctenos</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Auditorio</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">incio</NavLink>
              </NavItem>




              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="$#"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Reserva
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
