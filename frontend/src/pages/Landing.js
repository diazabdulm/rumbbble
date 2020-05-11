import React, { Fragment } from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";

import Introduction from "../components/Introduction";
import PostPreview from "../components/PostPreview";

const PostPreviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
`;

export default function Landing() {
  const renderPostPreviews = () =>
    [0, 1, 2, 3, 4, 5, 6].map((elem) => <PostPreview key={elem} />);

  return (
    <Fragment>
      <Introduction />
      <Container>
        <PostPreviewsContainer>{renderPostPreviews()}</PostPreviewsContainer>
      </Container>
    </Fragment>
  );
}
