import React, { Fragment } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const TopNavigationContainer = styled(Navbar)`
  background: #0d0c22;
`;

const BottomNavigationContainer = styled(Navbar)`
  background: #0d0c22;
`;

const LogoContainer = styled(Navbar.Brand)`
  line-height: 0;
`;

const Logo = styled(Image)`
  width: 6rem;
  height: auto;
`;

export default function UploadPage() {
  return (
    <Fragment>
      <TopNavigationContainer variant="dark">
        <Container>
          <LogoContainer href="/">
            <Logo src={require("../assets/logo.png")} alt="logo" />
          </LogoContainer>
          <Navbar.Text className="font-weight-bold text-white mx-auto">
            Publish your Project
          </Navbar.Text>
          <Navbar.Text>Help</Navbar.Text>
        </Container>
      </TopNavigationContainer>
      <Navbar fixed="bottom" className="border-top">
        <Container>
          <Button variant="outline-secondary">Cancel</Button>
        </Container>
      </Navbar>
    </Fragment>
  );
}
