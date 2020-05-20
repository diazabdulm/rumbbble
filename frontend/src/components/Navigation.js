import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Logo from "./Logo";

import { selectUser } from "../reducers/authSlice";

const NavigationContainer = styled(Navbar)`
  box-shadow: inset 0px -1px 0px #f3f3f4;
  background: #fff;
  color: #6e6d7a;
`;

export default function Navigation() {
  const user = useSelector(selectUser);

  const renderLoggedIn = (
    <Fragment>
      <NavDropdown
        id="profile-dropdown"
        title={
          <Image src={user.picture} height="40" width="40" roundedCircle />
        }
      >
        <NavDropdown.Item href="/auth/logout">Sign Out</NavDropdown.Item>
      </NavDropdown>
      <Button className="ml-2" variant="primary" href="/projects/new">
        Upload
      </Button>
    </Fragment>
  );

  const renderLoggedOut = (
    <Fragment>
      <Nav.Link href="/login">Sign in</Nav.Link>
      <Button
        className="d-none d-lg-block d-xl-block ml-3"
        variant="primary"
        href="/login"
      >
        Sign up
      </Button>
    </Fragment>
  );

  return (
    <NavigationContainer sticky="top">
      <Container>
        <Navbar.Brand className="mr-auto" href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="align-items-center">
          {user ? renderLoggedIn : renderLoggedOut}
        </Nav>
      </Container>
    </NavigationContainer>
  );
}
