import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IntroJumbotron = styled(Jumbotron)`
  background: #f9f8fd;
`;

const IntroContainer = styled(Container)`
  display: flex;
  flex-flow: column-reverse;

  @media (min-width: 992px) {
    & {
      flex-flow: row;
    }
  }
`;

const CreditsText = styled.p`
  color: #9e9ea7;

  & a {
    color: #9e9ea7;
  }
`;

export default function Introduction() {
  return (
    <IntroJumbotron fluid>
      <IntroContainer className="d-flex text-center text-lg-left">
        <Row className="align-items-center">
          <Col xs={10} md={8} lg={{ span: 5, order: 2 }} className="mx-auto">
            <div id="image-container" className="ml-md-5">
              <img
                className="img-fluid"
                src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-9270a203743088cf36b939b04708d9a18fa794e04373964283a2d87c8f6fba0f.png"
                alt="intro"
              />
              <CreditsText className="text-center text-lg-right my-3">
                Art by{" "}
                <a href="https://dribbble.com/romainbriaux">
                  <u>Romain Briaux</u>
                </a>
              </CreditsText>
            </div>
          </Col>
          <Col xs={12} lg={{ span: 7, order: 1 }}>
            <div id="text-container">
              <h1 className="font-weight-bold">
                Discover the world's top developers & projects
              </h1>
              <p className="lead font-weight-normal">
                Rumbbble is the leading destination to find & showcase creative
                work and home to the world's best programming enthusiasts.
              </p>
              <Button variant="primary" size="lg" role="button" href="/login">
                Sign up
              </Button>
            </div>
          </Col>
        </Row>
      </IntroContainer>
    </IntroJumbotron>
  );
}
