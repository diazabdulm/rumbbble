import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { selectUser } from "../reducers/authSlice";

import Introduction from "../components/Introduction";
import PostPreview from "../components/PostPreview";

const PostPreviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
`;

export default function LandingPage() {
  const user = useSelector(selectUser);
  const renderPostPreviews = () =>
    [0, 1, 2, 3, 4, 5, 6].map((elem) => <PostPreview key={elem} />);

  return (
    <Fragment>
      {!user && <Introduction />}
      <Container className="px-sm-0">
        <PostPreviewsContainer className="mt-4">
          {renderPostPreviews()}
        </PostPreviewsContainer>
      </Container>
    </Fragment>
  );
}
