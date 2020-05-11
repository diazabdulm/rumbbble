import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const IntroJumbotron = styled(Jumbotron)`
  background: #f9f8fd;
`;

const IntroContainer = styled(Container)`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;

  @media (min-width: 992px) {
    & {
      flex-flow: row;
    }
  }
`;

const IntroImage = styled(Image)`
  @media (max-width: 576px) {
    max-width: 100%;
  }
  @media (min-width: 576px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 450px;
  }
  @media (min-width: 1200px) {
    width: 500px;
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
      <IntroContainer className="d-flex align-items-center text-center text-lg-left">
        <div id="text-container">
          <h1 className="font-weight-bold">
            Discover the world's top developers & projects
          </h1>
          <p className="lead font-weight-normal">
            Rumbbble is the leading destination to find & showcase creative work
            and home to the world's best programming enthusiasts.
          </p>
          <Button variant="primary" size="lg" role="button" href="/login">
            Sign up
          </Button>
        </div>
        <div id="image-container" className="ml-md-5">
          <IntroImage
            src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-9270a203743088cf36b939b04708d9a18fa794e04373964283a2d87c8f6fba0f.png"
            alt="intro image"
          />
          <CreditsText className="text-center text-lg-right my-3">
            Art by{" "}
            <a href="https://dribbble.com/romainbriaux" target="_blank">
              <u>Romain Briaux</u>
            </a>
          </CreditsText>
        </div>
      </IntroContainer>
    </IntroJumbotron>
  );
}
