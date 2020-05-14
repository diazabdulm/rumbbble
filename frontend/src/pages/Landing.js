import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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
  const [projectFeed, setProjectFeed] = useState([]);

  useEffect(() => {
    const fetchProjecFeed = async () => {
      const { data: feed } = await axios.get("/posts/all");
      setProjectFeed(feed);
      console.log("feed", feed);
    };
    fetchProjecFeed();
  }, []);

  const renderPostPreviews = () =>
    projectFeed.map(({ _id, ...restProps }) => (
      <PostPreview key={_id} {...restProps} />
    ));

  return (
    <Fragment>
      {!user && <Introduction />}
      <Container className="px-sm-0">
        <PostPreviewsContainer className="mt-4 card-deck">
          {renderPostPreviews()}
        </PostPreviewsContainer>
      </Container>
    </Fragment>
  );
}
