import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import logo from "../images/rsgray.png";

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} style={{ width: 100, marginTop: -7 }} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/robertomsoriano"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About Me
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/about/"><i className="far fa-id-badge"></i> Who I am</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/contact/"><i className="far fa-address-card"></i> Contact Me</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
