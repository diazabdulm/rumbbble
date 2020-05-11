import React, { Fragment } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

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
