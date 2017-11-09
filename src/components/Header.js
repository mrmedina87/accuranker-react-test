import React from 'react';
import { Container, Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const urlsvg = `./src/assets/img/accuranker-logo.svg`;
    return (
      <header className="header-wrapper">
        <div>
          <Navbar color="faded">
            <NavbarBrand href="/" className="accuranker-logo">
              <img src={urlsvg} />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button className="button-hover" color="primary" onClick={this.props.openModal}>
                  About
                </Button>  
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </header>
    );
  }
};