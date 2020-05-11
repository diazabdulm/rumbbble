import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";

const Sidebar = styled(Jumbotron)`
  background: #f1cdd7;
  color: #865c6c;
`;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 415px;
  margin: auto;
`;

export default function Login() {
  return (
    <Container fluid>
      <Row>
        <Sidebar className="d-none d-lg-block d-xl-block col-lg-5 vh-100 mb-0 rounded-0">
          <Container>
            <h3 className="font-weight-bold">
              Discover the world's top
              <br />
              Developers & Creators
            </h3>
          </Container>
        </Sidebar>
        <div className="col-lg-7 vh-100 d-flex">
          <LoginContainer className="">
            <Image src={require("../assets/logo.png")} width="125" className="mb-5" />
            <h3 className="mb-4 font-weight-bold">Sign in to Rumbbble</h3>
            <Button variant="dark" block>
              Sign in with Github
            </Button>
          </LoginContainer>
        </div>
      </Row>
    </Container>
  );
}
