import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import { selectUser } from "../reducers/authSlice";

import withNavigation from "../hocs/withNavigation";

import Introduction from "../components/Introduction";
import PostPreview from "../components/PostPreview";

const PostPreviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
`;

function LandingPage() {
  const user = useSelector(selectUser);
  const [projectFeed, setProjectFeed] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchProjecFeed = async () => {
      const { data: feed } = await axios.get("/posts/all");
      if (mounted) setProjectFeed(feed);
    };
    fetchProjecFeed();
    return () => (mounted = false);
  }, []);

  const renderPostPreviews = () =>
    projectFeed.map((props) => (
      <PostPreview key={props._id} {...props}>
        <div>Hello</div>
        <Introduction />
      </PostPreview>
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

export default withNavigation(LandingPage);
