import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const NavigationContainer = styled(Navbar)`
  box-shadow: inset 0px -1px 0px #f3f3f4;
  background: #fff;
  height: 60px;
  color: #6e6d7a;
  position: sticky;

  @media (min-width: 992px) {
    & {
      position: static;
      height: 80px;
    }
  }
`;

const Logo = styled(Image)`
  width: 6rem;
  height: auto;
`;

export default function Navigation() {
  return (
    <NavigationContainer expand="lg">
      <Container>
        <Navbar.Brand className="mr-auto" href="/">
          <Logo src={require("../assets/logo.png")} alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/login">Sign in</Nav.Link>
          <Button
            className="d-none d-lg-block d-xl-block ml-3"
            variant="primary"
            href="/login"
          >
            Sign up
          </Button>
        </Nav>
      </Container>
    </NavigationContainer>
  );
}
